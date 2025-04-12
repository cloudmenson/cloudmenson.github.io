"use client";

import { courses } from "@/app/utils/mock";
import { CourseCard } from "../Cards/CourseCard";

export const Course = () => {
  return (
    <section className="py-[5vw] px-[2vw] bg-section-bg text-section-text">
      <div className="max-w-[90vw] mx-auto">
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
          Plans
        </h2>

        <div
          className="
          grid grid-cols-1 
          md:grid-cols-1
          lg:grid-cols-3 
          xl:grid-cols-3
          2xl:grid-cols-3 
          
          gap-[5vw]
          md:gap-[2.2vw]
          lg:gap-[2vw]
          xl:gap-[2vw]
          2xl:gap-[2vw]"
        >
          {courses.map((course, idx) => (
            <CourseCard key={idx} data={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
