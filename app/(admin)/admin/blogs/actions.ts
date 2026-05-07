'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { requireAdminSession } from '@/lib/admin-auth';
import {
  deleteBlogPostById,
  parseBlogPayload,
  toggleBlogPostStatus,
  upsertBlogPost,
} from '@/lib/blog';

function getFormValue(formData: FormData, key: string) {
  return formData.get(key)?.toString() || '';
}

export async function saveBlogPostAction(formData: FormData) {
  const session = await requireAdminSession();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const payload = parseBlogPayload(formData);
  const originalSlug = getFormValue(formData, 'originalSlug');
  const postId = await upsertBlogPost(formData, session.user);

  revalidatePath('/blog');
  revalidatePath(`/blog/${payload.slug}`);
  if (originalSlug && originalSlug !== payload.slug) {
    revalidatePath(`/blog/${originalSlug}`);
  }
  revalidatePath('/admin');
  revalidatePath('/admin/blogs');

  redirect(`/admin/blogs/${postId}/edit?saved=1`);
}

export async function deleteBlogPostAction(formData: FormData) {
  const session = await requireAdminSession();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const id = getFormValue(formData, 'id');

  if (!id) {
    throw new Error('Missing blog post id');
  }

  await deleteBlogPostById(id);

  revalidatePath('/blog');
  revalidatePath('/admin');
  revalidatePath('/admin/blogs');

  redirect('/admin/blogs?deleted=1');
}

export async function toggleBlogPostStatusAction(formData: FormData) {
  const session = await requireAdminSession();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const id = getFormValue(formData, 'id');
  const status = getFormValue(formData, 'status');

  if (!id || (status !== 'draft' && status !== 'published')) {
    throw new Error('Invalid blog status update');
  }

  await toggleBlogPostStatus(id, status);

  revalidatePath('/blog');
  revalidatePath('/admin');
  revalidatePath('/admin/blogs');

  redirect('/admin/blogs?updated=1');
}