"use client";

import { cn } from "@/app/utils/tailwind-merge";

interface IButton {
  text?: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6",
        "py-3",
        "relative",
        "mt-[3vw] ",
        "shadow-md ",
        "text-[1.5vw]",
        "rounded-[0.3vw]",
        "duration-300",
        "cursor-pointer",
        "text-main-text",
        "font-semibold ",
        "overflow-hidden",
        "transition-all ",
        "bg-button-signin",
        "active:scale-95",
        "hover:-translate-y-1",
        "hover:bg-button-signin-hover",
        "active:bg-button-signin-active"
      )}
    >
      <span className={cn("relative", "z-10")}>{text}</span>
    </button>
  );
};
