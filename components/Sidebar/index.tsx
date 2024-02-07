import { Link, Divider } from '@nextui-org/react';

interface ItemProps {
  title: string;
  href?: string;
}

interface SidebarProps {
  show: boolean;
}

const SidebarItem = ({ title, href }: ItemProps) => {
  return (
    <div className="ps-4 mb-2">{href ? <Link href={href}>{title}</Link> : <div>{title}</div>}</div>
  );
};

const Sidebar = ({ show }: SidebarProps) => {
  const className =
    'bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-20 bottom-0 left-0 z-[200] border-r-[1px]';
  // Append class based on state of sidebar visiblity
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  return (
    <div className={`${className}${appendClass}`}>
      <SidebarItem title="Table" href="/table" />
      <SidebarItem title="Something" />
      <SidebarItem title="Something Else" />

      <Divider className="mb-2" />

      <SidebarItem title="More Things" />
      <SidebarItem title="And More" />
    </div>
  );
};

export default Sidebar;