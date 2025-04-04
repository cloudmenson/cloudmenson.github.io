"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import { Window, Girl } from "./assets";
import { Button } from "./components/Button";
import { FlippedCard } from "./components/FlippedCard";

export default function Home() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const video = "/videos/greetings.mp4";

  return (
    <main className="flex flex-col">
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
                  className="text-[6vw] font-bold text-white cursor-default inline-block"
                >
                  {letter}
                </motion.span>
              )
            )}
          </div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-[2vw] mt-8 text-white"
            transition={{ delay: 0.3, duration: 1 }}
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
      <section className="px-8 my-[50px] mb-[33vw] pr-[calc(100vw-100%)] w-full">
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden p-5 rounded-sm custom-scroll">
          <FlippedCard
            backBg={Girl}
            frontBg={Window}
            frontContent={
              <div className="flex flex-col w-full h-full justify-start items-start">
                <h2 className="text-[2.5vw] mb-auto">
                  {t("flippedCard.title")}
                </h2>

                <p className="text-center w-full">
                  {t("flippedCard.subtitle")}
                </p>
              </div>
            }
            backContent={
              <div className="flex flex-col justify-start w-full h-full">
                <p>{t("flippedCard.backTitle")}</p>
              </div>
            }
            className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
          />
          <FlippedCard
            frontBg={Girl}
            backBg={Window}
            frontContent={
              <div className="flex flex-col justify-start w-full h-full">
                <h2 className="text-[2.5vw] mb-auto">
                  {t("flippedCard.title")}
                </h2>

                <p className="text-center w-full">
                  {t("flippedCard.subtitle")}
                </p>
              </div>
            }
            backContent={
              <div className="flex flex-col justify-start w-full h-full">
                <p className="text-center w-full">
                  {t("flippedCard.backTitle")}
                </p>
              </div>
            }
            className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
          />
          <FlippedCard
            backBg={Girl}
            frontBg={Window}
            frontContent={
              <div className="flex flex-col justify-start w-full h-full">
                <h2 className="text-[2.5vw] mb-auto">
                  {t("flippedCard.title")}
                </h2>

                <p className="text-center w-full">
                  {t("flippedCard.subtitle")}
                </p>
              </div>
            }
            backContent={
              <div className="flex flex-col justify-start w-full h-full">
                <p className="text-center w-full">
                  {t("flippedCard.backTitle")}
                </p>
              </div>
            }
            className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
          />
          <FlippedCard
            frontBg={Girl}
            backBg={Window}
            frontContent={
              <div className="flex flex-col justify-start w-full h-full">
                <h2 className="text-[2.5vw] mb-auto">
                  {t("flippedCard.title")}
                </h2>

                <p className="text-center w-full">
                  {t("flippedCard.subtitle")}
                </p>
              </div>
            }
            backContent={
              <div className="flex flex-col justify-start w-full h-full">
                <p className="text-center w-full">
                  {t("flippedCard.backTitle")}
                </p>
              </div>
            }
            className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
          />
          <FlippedCard
            backBg={Girl}
            frontBg={Window}
            frontContent={
              <div className="flex flex-col justify-start w-full h-full">
                <h2 className="text-[2.5vw] mb-auto">
                  {t("flippedCard.title")}
                </h2>

                <p className="text-center w-full">
                  {t("flippedCard.subtitle")}
                </p>
              </div>
            }
            backContent={
              <div className="flex flex-col justify-start w-full h-full">
                <p className="text-center w-full">
                  {t("flippedCard.backTitle")}
                </p>
              </div>
            }
            className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
}
