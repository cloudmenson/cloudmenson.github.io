"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

export interface Social {
  link: string;
  icon: string;
}

export interface Mentor {
  name: string;
  photo: string | StaticImageData;
  socials: Social[];
  description: string;
}

interface IMentorCard {
  data: Mentor;
}

export const MentorCard = ({ data }: IMentorCard) => {
  return (
    <div
      className="
      flex 
      flex-col
      items-center
      bg-white/10
      rounded-xl
      p-4 sm:p-6
      lg:p-[1.5vw]
      backdrop-blur-sm
      h-full
      w-full"
    >
      <div className="w-[35vw] sm:w-[25vw] md:w-[18vw] lg:w-[12vw] aspect-square bg-gray-300 rounded-full mb-4 overflow-hidden">
        <div className="relative w-full h-full mb-4 rounded-full overflow-hidden select-none pointer-events-none">
          <Image
            fill
            alt="Mentor"
            loading="lazy"
            src={data.photo}
            className="object-cover object-top"
          />
        </div>
      </div>

      <p
        className="
        text-[4vw]
        sm:text-[4vw]
        md:text-[2.5vw]
        lg:text-[2.5vw]
        xl:text-[2vw]
        2xl:text-[1.5vw]
        mb-[1.5vw]
        font-medium"
      >
        {data.name}
      </p>

      <p
        className="
        text-[3vw]
        sm:text-[2.4vw]
        md:text-[1.7vw]
        lg:text-[1.5vw]
        xl:text-[1.2vw]
        2xl:text-[1vw]

        mb-[1.5vw]
        text-center
        text-white/70"
      >
        {data.description}
      </p>

      <div className="flex justify-center gap-4 py-4">
        {data.socials.map((social: Social, idx: number) => (
          <React.Fragment key={idx}>
            <a
              target="_blank"
              href={social.link}
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                alt="Social"
                loading="lazy"
                src={social.icon}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[1.8vw] lg:h-[1.8vw]"
              />
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
