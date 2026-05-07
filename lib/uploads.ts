import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const allowedImageTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/avif',
]);

export async function saveImageUpload(file: File, folder = 'blog') {
  if (!allowedImageTypes.has(file.type)) {
    throw new Error('Unsupported image type');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be 5MB or smaller');
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = file.type.split('/')[1] || 'jpg';
  const filename = `${crypto.randomUUID()}.${extension}`;
  const directory = path.join(process.cwd(), 'public', 'uploads', folder);

  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), buffer);

  return `/uploads/${folder}/${filename}`;
}