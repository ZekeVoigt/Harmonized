import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/Logo.png"
        height="40"
        width="40"
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/Logo-dark.png"
        height="40"
        width="40"
        alt="logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Harmonized</p>
    </div>
  );
};
