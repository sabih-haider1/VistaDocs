'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  BarChart3,
  Bell,
  BookOpen,
  ChevronRight,
  LogOut,
  Settings,
  Shield,
  Sparkles,
} from 'lucide-react';

const navigation = [
  { href: '/admin', label: 'Overview', icon: BarChart3 },
  { href: '/admin/blogs', label: 'Blogs', icon: BookOpen },
  { href: '/admin/ai-assistant', label: 'AI Assistant', icon: Sparkles },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminShell({
  children,
  user,
}: {
  children: React.ReactNode;
  user: { name?: string | null; email?: string | null };
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.09),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-72 shrink-0 border-r border-white/70 bg-white/80 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 text-white shadow-lg shadow-slate-900/10">
            <Shield className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-sm font-semibold">VistaDocs Admin</p>
              <p className="text-xs text-slate-300">Secure content workspace</p>
            </div>
          </div>

          <nav className="mt-8 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? 'bg-slate-950 text-white shadow-lg shadow-slate-900/10'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  {active && <ChevronRight className="h-4 w-4 text-cyan-300" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {user.name?.[0] || user.email?.[0] || 'A'}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">{user.name || 'Admin'}</p>
                <p className="truncate text-xs text-slate-500">{user.email}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-white/70 bg-white/75 px-4 py-4 backdrop-blur-xl lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Admin dashboard</p>
                <h1 className="mt-1 text-lg font-semibold text-slate-950">VistaDocs Center</h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 md:flex">
                  <Bell className="h-4 w-4" />
                  Secure session active
                </div>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/10 lg:hidden"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}