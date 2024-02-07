import TableExample from '@/components/Table';

const TablePage = () => {
  return (
    <main className="flex flex-col min-h-screen items-center px-24 gap-12">
      <h1 className="text-4xl bg-blue-800 text-white py-6 w-full text-center">Table</h1>

      <TableExample />
    </main>
  );
};

export default TablePage;
