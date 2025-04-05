"use client";

import Image from "next/image";

import { mentors } from "@/app/utils/mock";
import React from "react";

export const AboutUs = () => {
  return (
    <section className="py-[5vw] px-[2vw] max-w-[90vw] mx-auto text-white">
      <h2 className="text-[2vw] font-bold text-center mb-[3vw]">About us</h2>

      <p className="text-[1.2vw] max-w-[60vw] mx-auto text-center mb-[4vw] leading-relaxed">
        At Crew Helper, we’re more than just mentors — we’re active airline
        professionals who know the industry from the inside. We’ve sat in the
        interview chair, passed the toughest assessments, and earned our wings.
        Now we’re here to help you do the same — with real insights, personal
        guidance, and genuine support. Aviation is our passion, and your success
        is our goal.
      </p>

      <div className="grid grid-cols-3 gap-[2vw] justify-items-center w-full">
        {mentors.map((mentor, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/10 rounded-xl p-[1.5vw] backdrop-blur-sm w-full h-full aspect-[3/4]"
          >
            <div className="w-[12vw] h-[12vw] bg-gray-300 rounded-full mb-[1vw] overflow-hidden">
              <div className="relative w-full h-full mb-[1vw] rounded-full overflow-hidden select-none pointer-events-none">
                <Image
                  fill
                  alt="Mentor"
                  loading="lazy"
                  src={mentor.photo}
                  className="object-cover object-top"
                />
              </div>
            </div>

            <p className="text-[1.1vw] mt-[0.5vw] font-medium">{mentor.name}</p>

            <p className="text-[0.95vw] text-center mb-auto text-white/70 mt-[0.5vw]">
              {mentor.description}
            </p>

            <div className="flex justify-center gap-[1vw] py-[0.8vw]">
              {mentor.socials.map((social, idx) => (
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
                      className="w-[1.8vw] h-[1.8vw]"
                    />
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
