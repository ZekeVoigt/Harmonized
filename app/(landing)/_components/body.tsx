import Image from "next/image";

export default function Body() {
  return (
    <div className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4" style={{ opacity: 1, willChange: "auto", transform: "none" }}>
      <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
        <Image 
          alt="header" 
          loading="lazy" 
          width={1920} 
          height={500} 
          className="rounded-[20px]" 
          src="/body.png"
        />
      </div>
    </div>
  );
}
