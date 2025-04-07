"use client";

import Slider from "react-slick";

import { benefits } from "@/app/utils/mock";
import { FlippedCard } from "../FlippedCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderConfig } from "./sliderConfig";

export const Benefits = () => {
  return (
    <section className="px-[2vw] py-[2vw] bg-section-bg w-full">
      <Slider {...sliderConfig} className="custom-scroll p-[1vw]">
        {benefits.map((card, idx) => (
          <div key={idx} className="px-[1vw]">
            <FlippedCard
              title={card.title}
              backBg={card.backBg}
              frontBg={card.frontBg}
              backTitle={card.backTitle}
              backContent={card.backContent}
              frontContent={card.frontContent}
              className="w-full h-[25vw] rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
