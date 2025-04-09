"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface RootModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const RootModal = ({ isOpen, onClose, children }: RootModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          onClick={onClose}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            key="modal"
            exit={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-black relative"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
