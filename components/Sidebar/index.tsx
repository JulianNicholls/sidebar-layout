import { Link, Divider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

interface ItemProps {
  title: string;
  href?: string;
}

interface SidebarProps {
  setter: (show: boolean) => void;
  show: boolean;
}

const Sidebar = ({ setter, show }: SidebarProps) => {
  const SidebarItem = ({ title, href }: ItemProps) => {
    const external = href?.startsWith('http');
    const current = usePathname();

    return (
      <div className="ps-4 mb-2">
        {href ? (
          <Link
            className={`hover:text-blue-600 hover:font-semibold ${
              current === href ? 'text-green-600 font-semibold' : 'text-black'
            }`}
            href={href}
            isExternal={external}
            showAnchorIcon={external}
          >
            {title}
          </Link>
        ) : (
          <div className="cursor-pointer" onClick={() => setter(!show)}>
            {title}
          </div>
        )}
      </div>
    );
  };

  const className =
    'bg-white min-w-[250px] transition-[margin-left] ease-in-out duration-500 fixed lg:static top-20 pt-4 bottom-0 left-0 z-[200] border-r-[1px]';
  // Append class based on state of sidebar visiblity
  const appendClass = show ? ' ml-0' : ' ml-[-250px] lg:ml-0';

  return (
    <div className={`${className}${appendClass}`}>
      <SidebarItem title="Home" href="/" />
      <SidebarItem title="Table" href="/table" />
      <SidebarItem title="Drag and Drop" href="/dragdrop" />
      <SidebarItem title="Image Containment" href="/images" />
      <Divider className="my-2" />
      <SidebarItem title="Source Code" href="https://github.com/JulianNicholls/sidebar-layout" />
    </div>
  );
};

export default Sidebar;
