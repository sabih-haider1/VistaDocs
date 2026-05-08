import { LogOut, Shield, UserCircle2 } from 'lucide-react';
import { requireAdminSession } from '@/lib/admin-auth';

export default async function AdminSettingsPage() {
  const session = await requireAdminSession();

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          <Shield className="h-3.5 w-3.5" />
          Settings
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Admin settings</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Authentication and session controls live server-side. Keep the login account in MongoDB and the auth secret in environment variables.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <UserCircle2 className="h-5 w-5 text-slate-500" />
            <h3 className="text-lg font-semibold text-slate-950">Current session</h3>
          </div>
          <dl className="mt-5 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">
              <dt className="font-medium text-slate-500">Name</dt>
              <dd className="font-semibold text-slate-950">{session?.user.name || 'Admin'}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">
              <dt className="font-medium text-slate-500">Email</dt>
              <dd className="font-semibold text-slate-950">{session?.user.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">
              <dt className="font-medium text-slate-500">Role</dt>
              <dd className="font-semibold text-slate-950">{session?.user.role}</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <LogOut className="h-5 w-5 text-slate-500" />
            <h3 className="text-lg font-semibold text-slate-950">Operational notes</h3>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <li>Use <span className="font-semibold text-slate-900">AUTH_SECRET</span> or <span className="font-semibold text-slate-900">NEXTAUTH_SECRET</span> in production.</li>
            <li>Seed admin users into the <span className="font-semibold text-slate-900">users</span> collection with a bcrypt password hash.</li>
            <li><strong>Local uploads (dev only):</strong> Stored under <span className="font-semibold text-slate-900">public/uploads/blog</span>. For production, use cloud storage (AWS S3, Cloudinary, etc.) or paste image URLs directly.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}