"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/app/utils/tailwind-merge";

import { useIsMobile } from "@/app/hooks";
import { useAuthStore } from "@/app/store/modalStore";

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
}

export const CourseCard = ({ data }: ICourseCard) => {
  const user = useAuthStore((state) => state.user);
  const isMobile = useIsMobile("(max-width: 1023px)");

  const redirectPath = user ? "/home/courses" : "/signin";

  return (
    <div
      className={cn(
        "relative flex flex-col p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all text-white overflow-hidden",
        data.title !== "Aviator" && !isMobile && "mt-6"
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
          data.gradient
        )}
      />

      <div className="flex flex-col h-full">
        <div className="mb-4">
          {data.Icon && (
            <data.Icon
              className={cn(
                `
                w-[6.5vw]
                sm:w-[5vw]
                md:w-[3.5vw]
                lg:w-[3.5vw]
                xl:w-[3.5vw]
                2xl:w-[3vw]
                h-auto
            `,
                data.color
              )}
            />
          )}
        </div>

        <h3
          className={cn(
            `
            text-[5vw]
            sm:text-[4vw]
            md:text-[2.5vw]
            lg:text-[2.4vw]
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
            text-[3.4vw]
            sm:text-[2.5vw]
            md:text-[1.5vw]
            lg:text-[1.5vw]
            xl:text-[1.2vw]
            2xl:text-[1vw]
            leading-relaxed
            list-disc
            list-inside
            space-y-[0.5vw]
            mb-[6vw]
            sm:mb-[3vw]
            md:mb-[1.5vw]
            lg:mb-[1.5vw]
            xl:mb-[1.2vw]
            2xl:mb-[1vw]`
          )}
        >
          {data.benefits.map((benefit: string, idx: number) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>

        <p
          className={cn(
            `
            font-bold
            mb-2
            mt-auto
            text-[5vw]
            sm:text-[4vw]
            md:text-[2.5vw]
            lg:text-[2.4vw]
            xl:text-[2vw]
            2xl:text-[2vw]
           `,
            data.color
          )}
        >
          ${data.price}
        </p>

        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          className={cn(
            `
            text-[3.2vw]
            sm:text-[2.5vw]
            md:text-[2vw]
            lg:text-[1.5vw]
            xl:text-[1.5vw]
            2xl:text-[1.2vw]
            px-4
            py-2
            cursor-pointer
            rounded-[10px]
            bg-gradient-to-r
            text-white
            font-semibold
            hover:bg-gray-200
            transition-colors`,
            data.gradient
          )}
        >
          <Link href={redirectPath}>{data.buttonText}</Link>
        </motion.button>
      </div>
    </div>
  );
};
