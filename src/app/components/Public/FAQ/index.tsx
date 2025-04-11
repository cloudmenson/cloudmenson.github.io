"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { questions } from "@/app/utils/mock";

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
        max-w-[90%]
        sm:max-w-[80%]
        md:max-w-[80%]
        lg:max-w-[80%]
        xl:max-w-[80%]
        2xl:max-w-[70%]"
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
        {questions.map((item, index) => {
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
                className="w-full px-[1.2vw] py-[0.6vw] flex justify-between items-center text-left"
              >
                <span
                  className="
                    font-medium
                    text-[2.5vw]
                    sm:text-[1.8vw]
                    md:text-[1.5vw]
                    lg:text-[1.5vw]
                    xl:text-[1.2vw]
                    2xl:text-[1.2vw]"
                >
                  {item.question}
                </span>

                {isOpen ? (
                  <Minus className="w-[1.5vw] h-[1.5vw]" />
                ) : (
                  <Plus className="w-[1.5vw] h-[1.5vw]" />
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
                        px-[1vw]
                        pt-[0.5vw]
                        pb-[1vw]
                        leading-relaxed                    
                        text-[2.3vw]
                        sm:text-[1.8vw]
                        md:text-[1.5vw]
                        lg:text-[1.5vw]
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
