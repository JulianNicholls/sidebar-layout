import SidebarLayout from '@/components/Layout';

import Containment from '@/components/Containment';

const ImagesPage = () => {
  return (
    <SidebarLayout>
      <main className="p-4">
        <div className="text-2xl text-center mb-4">Image Containment</div>

        <Containment />
      </main>
    </SidebarLayout>
  );
};

export default ImagesPage;
