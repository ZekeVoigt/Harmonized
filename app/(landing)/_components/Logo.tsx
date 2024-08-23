import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

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
      <div className="z-10 flex ml-3 items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mr-2 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Beta
        </span>
      </AnimatedGradientText>
    </div>
    </div>
  );
};
