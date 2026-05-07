import { Suspense } from 'react';
import LoginPanel from '@/components/admin/LoginPanel';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <LoginPanel />
    </Suspense>
  );
}