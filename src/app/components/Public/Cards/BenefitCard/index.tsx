import React from "react";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/app/utils/tailwind-merge";

interface IBenefitCard {
  title: string;
  subtitle: string;
  className?: string;
  imageSrc: StaticImageData;
  textWrapperClassName?: string;
}

export const BenefitCard = ({
  title,
  imageSrc,
  subtitle,
  className,
  textWrapperClassName,
}: IBenefitCard) => {
  return (
    <div
      className={cn(
        `
        flex
        w-full
        gap-[3vw]
        sm:gap[2vw]
        lg:gap[3vw]
        items-center
      `,
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={title}
        className="
        max-h-[30vw]
        w-full 
        sm:w-[100%]
        md:w-[50%]
        lg:w-[50%]
        xl:w-[50%]
        2xl:w-[50%]
        rounded-2xl
        shadow-lg
        bg-cover
        bg-center
        object-cover"
      />

      <div
        className={
          (cn(`
          flex
          flex-col
          gap-[0.5vw]
          items-start
          sm:items-center
          md:items-start
          w-full    
          sm:w-[100%]
          md:w-[50%]
          lg:w-[50%]
          xl:w-[50%]
          2xl:w-[50%]`),
          textWrapperClassName)
        }
      >
        <p
          className="
          text-[5vw]
          sm:text-[3.2vw]
          md:text-[2.5vw]
          lg:text-[2.2vw]
          xl:text-[1.9vw]
          2xl:text-[1.8vw]
          pb-[1vw]"
        >
          {title}
        </p>

        <p
          className="
          text-[3.2vw]
          sm:text-[2.6vw]
          md:text-[2vw]
          lg:text-[1.6vw]
          xl:text-[1.3vw]
          2xl:text-[1.2vw]
          pb-[1vw]"
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
