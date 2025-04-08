"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Loader } from "../components";
import { useAuthStore } from "../store/modalStore";
import { useFirebaseSignOut } from "../hooks/useSignOut";

export default function Userpage() {
  const { user } = useAuthStore();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  // Імітуємо отримання даних користувача
  useEffect(() => {
    // Тут можна викликати своє API /user, перевіряти токен і т.д.
    // Якщо токен недійсний → router.push("/signin")

    if (user === null) {
      router.push("/");
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [user, router]);

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
          {user?.photoURL && (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-[4vw] h-[4vw] relative mb-[1vw] shadow-lg border-2 border-white rounded-full overflow-hidden"
            >
              <Image
                src={user.photoURL}
                alt="User avatar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 6vw"
              />
            </motion.div>
          )}

          <motion.h2
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            className="text-3xl font-bold mb-[1vw]"
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Вітаємо, {user?.displayName}!
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

          <motion.button
            className="text-white p-[0.5vw] rounded outline outline-offset-2 cursor-pointer"
            onClick={useFirebaseSignOut}
          >
            Sign out
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
