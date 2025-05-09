import Image from 'next/image';

export default function TitleSidebar({ collapsed }) {
  return (
    <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} gap-2 mb-8 mt-12 md:mb-8 md:mt-0 px-2`}>
      {!collapsed && <h1 className="clash-title text-xl font-bold">Stack Hub</h1>}
      <Image 
        src="/logo_freestack_white_96px.svg" 
        alt="Freestack"
        width={collapsed ? 40 : 48}
        height={collapsed ? 40 : 48}
        priority
        className={`animate-bounceSlow2 ${collapsed ? 'mx-auto' : ''}`}
      />
    </div>
  );
}