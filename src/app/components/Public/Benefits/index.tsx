"use client";

import { motion } from "framer-motion";

import { Benefit1, Benefit2, Benefit3, Benefit4 } from "@/app/assets";

export const Benefits = () => {
  return (
    <section className="px-[2vw] pb-[4vw] pt-[10vw] bg-section-bg w-full flex justify-center">
      <div className="w-full max-w-[60vw] flex flex-col items-center gap-y-[4vw]">
        <div className="w-full flex justify-start">
          <motion.div
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] text-white rounded-2xl shadow-lg text-[1.2vw] font-medium bg-cover bg-center"
            style={{ backgroundImage: `url(${Benefit3.src})` }}
          >
            Підтримка на кожному етапі підготовки
          </motion.div>
        </div>
        <div className="w-full flex justify-end">
          <motion.div
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] text-white rounded-2xl shadow-lg text-[1.2vw] font-medium bg-cover bg-center"
            style={{ backgroundImage: `url(${Benefit2.src})` }}
          >
            Справжні кейси та підготовка до співбесіди
          </motion.div>
        </div>
        <div className="w-full flex justify-start">
          <motion.div
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] text-white rounded-2xl shadow-lg text-[1.2vw] font-medium bg-cover bg-center"
            style={{ backgroundImage: `url(${Benefit1.src})` }}
          >
            Команда менторів з досвідом у великих авіалініях
          </motion.div>
        </div>
        <div className="w-full flex justify-end">
          <motion.div
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="min-h-[25vw] w-[35vw] p-[2vw] text-white rounded-2xl shadow-lg text-[1.2vw] font-medium bg-cover bg-center"
            style={{ backgroundImage: `url(${Benefit4.src})` }}
          >
            Допомога з підготовкою резюме та виглядом
          </motion.div>
        </div>
      </div>
    </section>
  );
};
