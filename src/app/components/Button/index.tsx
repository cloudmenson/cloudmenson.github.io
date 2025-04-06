"use client";

import { cn } from "@/app/utils/tailwind-merge";

interface IButton {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ className, text, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
          px-[6vw]
          sm:px-[4vw]
          md:px-[3vw]
          lg:px-[2.5vw]
          xl:px-[2vw]
          2xl:px-[1.5vw]

          py-[2vw]
          sm:py-[1.5vw]
          md:py-[1vw]
          lg:py-[0.8vw]
          xl:py-[0.6vw]
          2xl:py-[0.5vw]

          text-[4vw]
          sm:text-[3vw]
          md:text-[2vw]
          lg:text-[2vw]
          xl:text-[1.5vw]
          2xl:text-[1.5vw]

          relative
          shadow-md
          rounded-[10px]
          duration-300
          cursor-pointer
          text-main-text
          font-semibold
          overflow-hidden
          transition-all
          bg-button-signin
          active:scale-95
          hover:-translate-y-1
          hover:bg-button-signin-hover
          active:bg-button-signin-active
        `,
        className
      )}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};
