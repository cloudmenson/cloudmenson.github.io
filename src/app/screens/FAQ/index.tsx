"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { questions } from "@/app/utils/navigation";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[70%] w-full py-[5vw] px-[2vw] mx-auto text-section-text">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-[2vw]">
        Поширені питання
      </h2>

      <div className="space-y-[1vw]">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 bg-white/5 hover:bg-white/10"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-[1.2vw] py-[0.6vw] flex justify-between items-center text-left"
              >
                <span className="text-[1.2vw] font-medium">
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
                    <div className="px-[1vw] pt-[0.5vw] pb-[1vw] text-[1vw] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
