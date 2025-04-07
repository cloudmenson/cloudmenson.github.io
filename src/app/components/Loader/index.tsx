"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center m-auto justify-center w-full h-[100dvh] gap-4 text-white">
      <motion.div
        className="text-blue-400"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      >
        <Plane size={60} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-semibold tracking-wider"
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};
