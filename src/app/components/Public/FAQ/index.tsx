"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { faq } from "@/app/utils/mock";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full
        py-[5vw]
        px-[2vw]
        mx-auto
        text-section-text
        max-w-[95%]
        sm:max-w-[95%]
        md:max-w-[95%]
        lg:max-w-[95%]
        xl:max-w-[90%]
        2xl:max-w-[75%]"
    >
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
        FAQ
      </h2>

      <div
        className="
        space-y-[2vw]
        sm:space-y-[1.8vw]
        md:space-y-[1.5vw]
        lg:space-y-[1.3vw]
        xl:space-y-[1.2vw]
        2xl:space-y-[1vw]"
      >
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 bg-white/5 hover:bg-white/10"
            >
              <button
                onClick={() => toggle(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left

                  px-[3vw]
                  sm:px-[1.5vw]
                  md:[1.5vw]
                  lg:px-[1.6vw]
                  xl:px-[1.5vw]
                  2xl:px-[1.5vw]

                  py-[1.5vw]
                  sm:py-[1vw]
                  md:py-[0.6vw]
                  lg:py-[0.8vw]
                  xl:py-[0.6vw]
                  2xl:py-[0.6vw]"
              >
                <span
                  className="
                    font-medium
                    text-[3.4vw]
                    sm:text-[2.8vw]
                    md:text-[2.4vw]
                    lg:text-[1.6vw]
                    xl:text-[1.4vw]
                    2xl:text-[1.2vw]"
                >
                  {item.question}
                </span>

                {isOpen ? (
                  <Minus className="w-[20px] h-[20px]" />
                ) : (
                  <Plus className="w-[20px] h-[20px]" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="relative"
                    transition={{ duration: 0.3 }}
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                  >
                    <div
                      className="
                        leading-relaxed                    
                        px-[3vw]
                        sm:px-[1.5vw]
                        md:[1.5vw]
                        lg:px-[1.6vw]
                        xl:px-[1.5vw]
                        2xl:px-[1.5vw]
                        py-[1.5vw]
                        sm:py-[0.8vw]
                        md:py-[0.6vw]
                        lg:py-[0.8vw]
                        xl:py-[0.6vw]
                        2xl:py-[0.6vw]
                        text-[2.8vw]
                        sm:text-[2.5vw]
                        md:text-[2.2vw]
                        lg:text-[1.4vw]
                        xl:text-[1.2vw]
                        2xl:text-[1vw]"
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
