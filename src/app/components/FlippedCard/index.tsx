"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/app/utils/tailwind-merge";

interface IFlippedCard {
  title: string;
  backTitle: string;
  className?: string;
  backContent: string;
  frontContent: string;
  backBg: StaticImageData;
  frontBg: StaticImageData;
}

export const FlippedCard = ({
  title,
  backBg,
  frontBg,
  className,
  backTitle,
  backContent,
  frontContent,
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
            layout="fill"
            objectFit="cover"
            alt="Front background"
            className="rounded-lg select-none"
          />

          <div className="absolute inset-0 flex items-center justify-center p-[1vw] w-full h-full">
            <div className="flex flex-col w-full h-full justify-start items-start">
              <h2 className="text-[2.5vw] mb-auto">{title}</h2>

              <p className="text-center w-full">{frontContent}</p>
            </div>
          </div>
        </div>

        {/* Зворотня сторона */}
        <div className="absolute inset-0 bg-flipped-card-backside-bg rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={backBg}
            layout="fill"
            objectFit="cover"
            alt="Back background"
            className="rounded-lg"
          />

          <div className="absolute inset-0 flex items-center justify-center p-[1vw] w-full h-full">
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p>{backTitle}</p>

              <p className="text-center w-full">{backContent}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
