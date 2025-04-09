"use client";

import { motion } from "framer-motion";

export const Benefits = () => {
  return (
    <section className="px-[2vw] pb-[4vw] pt-[10vw] bg-section-bg w-full flex justify-center">
      <div className="w-full max-w-[60vw] flex flex-col items-center gap-y-[4vw]">
        <div className="w-full flex justify-start">
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] bg-white/10 text-white rounded-2xl shadow-lg text-[1.2vw] font-medium"
          >
            Команда менторів з досвідом у великих авіалініях
          </motion.div>
        </div>
        <div className="w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] bg-white/10 text-white rounded-2xl shadow-lg text-[1.2vw] font-medium"
          >
            Справжні кейси та підготовка до співбесіди
          </motion.div>
        </div>
        <div className="w-full flex justify-start">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] bg-white/10 text-white rounded-2xl shadow-lg text-[1.2vw] font-medium"
          >
            Підтримка на кожному етапі підготовки
          </motion.div>
        </div>
        <div className="w-full flex justify-end">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] bg-white/10 text-white rounded-2xl shadow-lg text-[1.2vw] font-medium"
          >
            Допомога з підготовкою резюме та виглядом
          </motion.div>
        </div>
      </div>
    </section>
  );
};
