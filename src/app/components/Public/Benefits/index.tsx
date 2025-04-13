"use client";

import { benefits } from "@/app/utils/mock";
import { BenefitCard } from "@/app/components";
import { cn } from "@/app/utils/tailwind-merge";

export const Benefits = () => {
  return (
    <section
      className="
      overflow-x-hidden
      py-[6.5vw]
      sm:py-[5vw]
      md:py-[3.5vw]
      lg:py-[2.5vw]
      xl:py-[2.5vw]
      2xl:py-[5vw]
      px-[6.5vw]
      sm:px-[5vw]
      md:px-[3.5vw]
      lg:px-[2.5vw]
      xl:px-[2.5vw]
      2xl:px-[2vw]
      bg-section-bg
      w-full
      flex
      justify-center"
    >
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-y-[4vw]">
        <h2
          className="
          text-[6.5vw]
          sm:text-[5vw]
          md:text-[3.5vw]
          lg:text-[2.5vw]
          xl:text-[2.5vw]
          2xl:text-[2.5vw]
          font-bold
          text-center
          mb-[2vw]"
        >
          Why become a cabin crew?
        </h2>

        <div
          className="
          w-full
          flex
          gap-[8vw]
          sm:gap-[3vw]
          md:gap-[8vw]
          lg:gap-[2.5vw]
          xl:gap-[2.5vw]
          2xl:gap-[2.5vw]
          items-center
          flex-col"
        >
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              title={benefit.title}
              imageSrc={benefit.src}
              subtitle={benefit.subtitle}
              className={cn(
                idx % 2 === 1
                  ? "md:flex-row-reverse flex-col"
                  : "md:flex-row flex-col"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
