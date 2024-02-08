import SidebarLayout from '@/components/Layout';

import DragDrop from '@/components/DragDrop';

const DragDropPage = () => {
  return (
    <SidebarLayout>
      <main className="p-4">
        <div className="text-2xl text-center mb-4">Drag and Drop</div>

        <DragDrop />
      </main>
    </SidebarLayout>
  );
};

export default DragDropPage;
