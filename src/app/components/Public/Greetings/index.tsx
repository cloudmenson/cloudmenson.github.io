"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button } from "../Button";
import { useAuthStore } from "@/app/store/modalStore";

export const Greetings = () => {
  const user = useAuthStore((state) => state.user);

  const { t } = useTranslation();

  const video = "/videos/greetings.mp4";

  const redirectPath = user ? "/home" : "/signin";

  return (
    <section className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
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
        className="h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8"
      >
        <div className="flex justify-center flex-wrap gap-x-[0.4vw] gap-y-[0.8vw] px-4 sm:px-6 md:px-8 cursor-default">
          {["C", "r", "e", "w", "\u00A0", "H", "e", "l", "p", "e", "r"].map(
            (letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  text-white
                  font-semibold
                  text-[12vw]
                  sm:text-[8vw]
                  md:text-[8vw]
                  lg:text-[8vw]
                  xl:text-[7vw]
                  2xl:text-[6vw]"
              >
                {letter}
              </motion.span>
            )
          )}
        </div>

        <motion.p
          // style={{ fontFamily: "var(--font-pacifico)" }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            underline
            mb-[2vw]
            whitespace-pre-line
            text-white
            text-[4vw]
            sm:text-[3vw]
            md:text-[3vw] 
            lg:text-[2.2vw]
            xl:text-[2.2vw]
            2xl:text-[2.4vw]"
        >
          {t("home.goal")}
        </motion.p>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            mb-[10vw]
            sm:mb-[10vw]
            md:mb-[10vw]
            lg:mb-[5vw]
            xl:mb-[4vw]
            2xl:mb-[4vw]
            whitespace-pre-line
            text-white
            text-[4vw]
            sm:text-[3vw]
            md:text-[3vw] 
            lg:text-[2.2vw]
            xl:text-[2.2vw]
            2xl:text-[2vw]"
        >
          {t("home.about")}
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link href={redirectPath}>
            <Button text={t("home.consult")} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
