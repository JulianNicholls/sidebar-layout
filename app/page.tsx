'use client';

import { Link } from '@nextui-org/react';
import SidebarLayout from '@/components/Layout';

// import Image from 'next/image';

export default function Home() {
  return (
    <SidebarLayout>
      <main className="flex flex-col min-h-screen items-center px-24 gap-12">
        <Link href="/table">Table page</Link>
      </main>
    </SidebarLayout>
  );
}
