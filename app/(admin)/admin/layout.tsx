import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import { requireAdminSession } from '@/lib/admin-auth';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAdminSession();

  if (!session) {
    redirect('/login');
  }

  return <AdminShell user={session.user}>{children}</AdminShell>;
}