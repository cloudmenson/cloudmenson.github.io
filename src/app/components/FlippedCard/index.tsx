import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/app/utils/tailwind-merge";

interface IFlippedCard {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  frontBg: StaticImageData;
  backBg: StaticImageData;
  className?: string;
}

export const FlippedCard = ({
  frontContent,
  backContent,
  frontBg,
  backBg,
  className,
}: IFlippedCard) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((prev) => !prev)}
      className={cn("relative w-full h-full [perspective:1000px]", className)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Передня сторона */}
        <div className="absolute inset-0 rounded-lg shadow-lg [backface-visibility:hidden]">
          <Image
            src={frontBg}
            alt="Front background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {frontContent}
          </div>
        </div>

        {/* Зворотня сторона */}
        <div className="absolute inset-0 rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={backBg}
            alt="Back background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {backContent}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
