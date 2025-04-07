"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Loader } from "../components";

export default function Userpage() {
  const [username, setUsername] = useState("Guest"); // або отримуємо з пропсів чи контексту
  const [loading, setLoading] = useState(true);

  // Імітуємо отримання даних користувача
  useEffect(() => {
    // Тут можна викликати своє API /user, перевіряти токен і т.д.
    // Якщо токен недійсний → router.push("/signin")

    setTimeout(() => {
      setUsername("Danya");
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 to-section-bg text-white">
      <section className="px-[2vw] py-[3vw]">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[900px] mx-auto p-[2vw] bg-black/30 rounded-xl shadow-xl flex flex-col items-center"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl font-bold mb-[1vw]"
          >
            Вітаємо, {username}!
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg leading-relaxed max-w-[600px] text-center mb-[2vw]"
          >
            Раді бачити вас у вашому особистому кабінеті бортпровідника! Тут ви
            знайдете інформацію про свої курси, менторів та зможете редагувати
            профіль.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
