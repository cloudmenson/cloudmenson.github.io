"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
// import { greetingsImage } from "@/app/assets";
import { Button } from "./components/Button";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { cn } from "./utils/tailwind-merge";
import { FlippedCard } from "./components/FlippedCard";
import { Window, Girl } from "./assets";

export default function Home() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useSmoothScroll();

  const video = "/videos/greetings.mp4";

  return (
    <main className="flex flex-col">
      {/* <section
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${greetingsImage.src})` }}
      > */}

      <section className="h-screen w-full bg-cover bg-center relative overflow-hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/50 z-[-1]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center text-center"
        >
          <div className="flex justify-center">
            {["C", "r", "e", "w", "\u00A0", "H", "e", "l", "p", "e", "r"].map(
              (letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-[80px] font-bold text-white cursor-default inline-block"
                >
                  {letter}
                </motion.span>
              )
            )}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-3xl max-w-2xl mt-8 text-white"
          >
            {t("home.about")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Button
              text={t("home.consult")}
              onClick={() => setIsModalOpen(true)}
            />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                exit={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-black relative"
              >
                <h2 className="text-2xl font-bold mb-4">Залиште заявку</h2>

                <p className="mb-4">Скоро тут буде форма 📱</p>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Закрити
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Інші секції */}
      <section
        className={cn("px-8 my-[50px] mb-[500px] pr-[calc(100vw-100%)] w-full")}
      >
        <div className={cn("flex gap-4 overflow-x-auto bg-pidlozhka p-5 rounded-sm")}>
          <FlippedCard
            backBg={Girl}
            frontBg={Window}
            className="w-[450px] h-[500px] flex-shrink-0 rounded-2xl last:mr-[calc(100vw-100%)]"
            frontContent={<div>Передній контент</div>}
            backContent={<div>Зворотній контент</div>}
          />
          <FlippedCard
            backBg={Window}
            frontBg={Girl}
            className="w-[450px] h-[500px] flex-shrink-0 rounded-2xl last:mr-[calc(100vw-100%)]"
            frontContent={<div>Передній контент</div>}
            backContent={<div>Зворотній контент</div>}
          />
          <FlippedCard
            backBg={Girl}
            frontBg={Window}
            className="w-[450px] h-[500px] flex-shrink-0 rounded-2xl last:mr-[calc(100vw-100%)]"
            frontContent={<div>Передній контент</div>}
            backContent={<div>Зворотній контент</div>}
          />
          <FlippedCard
            backBg={Window}
            frontBg={Girl}
            className="w-[450px] h-[500px] flex-shrink-0 rounded-2xl last:mr-[calc(100vw-100%)]"
            frontContent={<div>Передній контент</div>}
            backContent={<div>Зворотній контент</div>}
          />
        </div>
      </section>
    </main>
  );
}
