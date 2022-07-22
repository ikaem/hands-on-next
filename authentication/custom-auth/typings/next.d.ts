// authentication\custom-auth\typings\next.d.ts

import "next";

declare module 'next' {
  interface NextApiRequest {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  }
}
