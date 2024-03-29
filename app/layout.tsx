'use client';

import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Table Example from NextUI',
//   description: 'Typescript Table Example',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
