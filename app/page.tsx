'use client';

import SidebarLayout from '@/components/Layout';

// import Image from 'next/image';

export default function HomePage() {
  return (
    <SidebarLayout>
      <main className="p-4 grid place-items-center">
        <div className="h-[70svh] w-[60vw] bg-white p-2">
          <div className="text-center text-3xl">Stuff</div>
          <div className="text-2xl mt-12">Important Heading</div>
          <div className="mx-12 h-[40%] mt-2 bg-stone-300"></div>
          <div className="text-2xl mt-12">Important Heading 2</div>
          <div className="mx-12 h-[20%] mt-2 bg-stone-300"></div>
        </div>
      </main>
    </SidebarLayout>
  );
}
