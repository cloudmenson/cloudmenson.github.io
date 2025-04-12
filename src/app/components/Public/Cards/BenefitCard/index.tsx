import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

import { cn } from "@/app/utils/tailwind-merge";

interface IBenefitCard {
  title: string;
  subtitle: string;
  className?: string;
  textInitial?: number;
  initialImage?: number;
  imageSrc: StaticImageData;
}

export const BenefitCard = ({
  title,
  imageSrc,
  subtitle,
  className,
  textInitial,
  initialImage,
}: IBenefitCard) => {
  return (
    <motion.div
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
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: initialImage }}
    >
      <motion.div
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.03 }}
        style={{ backgroundImage: `url(${imageSrc.src})` }}
        className="
            min-h-[40vw]
            sm:min-h-[25vw]
            w-full 
            sm:w-[90%]
            md:w-[60%]
            lg:w-[45%]
            xl:w-[50%]
            rounded-2xl
            shadow-lg
            bg-cover
            bg-center"
      />

      <motion.div
        viewport={{ once: true }}
        initial={{ x: textInitial, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex flex-col gap-[0.5vw] items-start sm:items-center md:items-start w-full md:w-[unset]"
      >
        <p
          className="
          text-[3.5vw]
          sm:text-[3.2vw]
          md:text-[2.5vw]
          lg:text-[2.2vw]
          xl:text-[1.8vw]
          pb-[1vw]"
        >
          {title}
        </p>

        <p
          className="
          text-[3vw]
          sm:text-[2.6vw]
          md:text-[2vw]
          lg:text-[1.6vw]
          xl:text-[1.2vw]
          pb-[1vw]"
        >
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
};
