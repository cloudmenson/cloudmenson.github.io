"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useIsMobile } from "@/app/hooks";
import { mentors } from "@/app/utils/mock";

import { Mentor, MentorCard } from "../Cards/MentorCard";

import "swiper/css";
import "swiper/css/navigation";

export const AboutUs = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-[2vw] max-w-[90vw] mx-auto text-white">
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
          mb-[4vw]"
      >
        About us
      </h2>

      <p
        className="
        text-[3.2vw]
        sm:text-[2.8vw]
        md:text-[2.5vw]
        lg:text-[1.8vw]
        xl:text-[1.5vw]
        2xl:text-[1.3vw]
        max-w-6xl
        mx-auto
        text-center
        mb-10
        leading-relaxed"
      >
        At Crew Helper, we’re more than just mentors — we’re active airline
        professionals who know the industry from the inside. We’ve sat in the
        interview chair, passed the toughest assessments, and earned our wings.
        Now we’re here to help you do the same — with real insights, personal
        guidance, and genuine support. Aviation is our passion, and your success
        is our goal.
      </p>

      {isMobile ? (
        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          className="relative p-[1vw]"
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
        >
          <div className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition z-10">
            <ChevronLeft className="text-white w-6 h-6" />
          </div>
          <div className="custom-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition z-10">
            <ChevronRight className="text-white w-6 h-6" />
          </div>

          {mentors.map((data: Mentor, idx) => (
            <SwiperSlide key={idx}>
              <MentorCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[2vw] justify-items-center w-full">
          {mentors.map((data: Mentor, idx) => (
            <MentorCard key={idx} data={data} />
          ))}
        </div>
      )}
    </section>
  );
};
