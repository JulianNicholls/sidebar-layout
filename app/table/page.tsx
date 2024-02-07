'use client';

import TableExample from '@/components/Table';

import SidebarLayout from '@/components/Layout';

const TablePage = () => {
  return (
    <SidebarLayout>
      <main className="p-4">
        <TableExample />
      </main>
    </SidebarLayout>
  );
};

export default TablePage;
