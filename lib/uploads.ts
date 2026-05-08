import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { existsSync } from 'fs';

const allowedImageTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/avif',
]);

// Check if we're in a serverless environment (Vercel/AWS Lambda)
const isServerless = process.env.VERCEL || process.env.LAMBDA_TASK_ROOT;

export async function saveImageUpload(file: File, folder = 'blog') {
  if (!allowedImageTypes.has(file.type)) {
    throw new Error('Unsupported image type');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be 5MB or smaller');
  }

  if (isServerless) {
    throw new Error(
      'File uploads are not supported in production. Please use cloud storage (AWS S3, Cloudinary, etc.) or paste image URLs directly. ' +
      'For development: run `npm run dev` locally. ' +
      'For production: Set up cloud storage integration.'
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = file.type.split('/')[1] || 'jpg';
  const filename = `${crypto.randomUUID()}.${extension}`;
  const directory = path.join(process.cwd(), 'public', 'uploads', folder);

  try {
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, filename), buffer);
    return `/uploads/${folder}/${filename}`;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to write file';
    throw new Error(`Upload failed: ${message}. File uploads require a writable filesystem.`);
  }
}