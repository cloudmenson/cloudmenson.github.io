import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/utils/tailwind-merge";

interface IFlippedCard {
  backSideText: string;
  frontSideText: string;
}

import { Window } from "@/app/assets";

export const FlippedCard = ({ frontSideText, backSideText }: IFlippedCard) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full perspective-1000"
      onClick={() => setFlipped(!flipped)} // Flip on click
    >
      {/* Flipping container */}
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d"
        animate={{
          rotateY: flipped ? 180 : 0, // Rotate 180 degrees when flipped
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <motion.div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-white rounded-lg shadow-lg backface-hidden"
          )}
          initial={{ opacity: 1 }}
          animate={{ opacity: flipped ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={Window}
            alt="Bg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg absolute inset-0"
          />

          <p className="z-10">{frontSideText}</p>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-white rounded-lg shadow-lg backface-hidden rotate-y-180"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={Window}
            alt="Bg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg absolute inset-0"
          />

          <p className="z-10">{backSideText}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
