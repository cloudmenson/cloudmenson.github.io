import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Button } from "@/app/components/Button";
import { useModalStore } from "@/app/store/modalStore";

export const Greetings = ({}) => {
  const { open } = useModalStore();
  const { t } = useTranslation();

  const video = "/videos/greetings.mp4";

  return (
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
          <Button text={t("home.consult")} onClick={open} />
        </motion.div>
      </motion.div>
    </section>
  );
};
