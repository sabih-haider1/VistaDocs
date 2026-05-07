import { NextResponse } from 'next/server';
import { requireAdminSession } from '@/lib/admin-auth';
import { saveImageUpload } from '@/lib/uploads';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Missing file' }, { status: 400 });
  }

  try {
    const url = await saveImageUpload(file, 'blog');
    return NextResponse.json({ url });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload failed';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}