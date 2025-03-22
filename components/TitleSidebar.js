import Image from 'next/image';

export default function TitleSidebar() {
  return (
    <div className="flex items-center gap-6 mb-8">
      <h1 className="clash text-xl font-bold">Free Stack</h1>
      <Image 
              src="/logo_freestack_white_96px.svg" 
              alt="Freestack"
              width={48}
              height={48}
              priority
            />
    </div>
  );
}