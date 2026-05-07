import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: 'admin' | 'editor';
    } & DefaultSession['user'];
  }

  interface User {
    role?: 'admin' | 'editor';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'admin' | 'editor';
  }
}