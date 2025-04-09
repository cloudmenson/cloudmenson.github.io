"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/tailwind-merge";
import { LucideIcon } from "lucide-react";

export interface ICourse {
  link: string;
  title: string;
  price: number;
  color: string;
  Icon: LucideIcon;
  gradient: string;
  benefits: string[];
  buttonText: string;
}

interface ICourseCard {
  data: ICourse;
  duration: number;
}

export const CourseCard = ({ data, duration }: ICourseCard) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut" }}
      className={cn(
        `relative
        flex-1
        p-[2vw]
        border
        border-white/20
        rounded-xl
        bg-white/10
        backdrop-blur-md
        shadow-md
        hover:shadow-xl
        transition-all
        text-white
        overflow-hidden`,
        data.title !== "Aviator" && "mt-[2vw]"
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r",
          data.gradient
        )}
      />

      <div className="flex flex-col h-full">
        <div className="mb-[1vw]">
          {data.Icon && (
            <data.Icon
              className={cn(
                `
                w-[5vw]
                sm:w-[3.5vw]
                md:w-[3.5vw]
                lg:w-[3.5vw]
                xl:w-[3.5vw]
                2xl:w-[3vw]
                h-auto`,
                data.color
              )}
            />
          )}
        </div>

        <h3
          className={cn(
            `
            text-[3.2vw]
            sm:text-[2vw]
            md:text-[2vw]
            lg:text-[2vw]
            xl:text-[1.8vw]
            2xl:text-[1.6vw]
            font-semibold
            mb-[1vw]
            text-white`,
            data.color
          )}
        >
          {data.title}
        </h3>

        <ul
          className={cn(
            `
            text-[3.2vw]
            sm:text-[1.2vw]
            md:text-[1.5vw]
            lg:text-[1.2vw]
            xl:text-[1.2vw]
            2xl:text-[1vw]
            leading-relaxed
            list-disc
            list-inside
            space-y-[0.5vw]
            mb-[1vw]`
          )}
        >
          {data.benefits.map((benefit: string, idx: number) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>

        <p className={cn("text-[2vw] font-bold mb-[1vw] mt-auto", data.color)}>
          ${data.price}
        </p>

        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          className={cn(
            `text-[1vw] px-[2vw] py-[0.8vw] cursor-pointer rounded-full bg-gradient-to-r text-white font-semibold hover:bg-gray-200 transition-colors`,
            data.gradient
          )}
        >
          <Link href="/signin">{data.buttonText}</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};
