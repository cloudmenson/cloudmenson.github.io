"use client";

import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/app/lib/firebase";
import { useLoadingStore } from "../store/loadingStore";

export const useEmailPasswordAuth = () => {
  const router = useRouter();
  const { setLoading } = useLoadingStore.getState();

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user.uid === "dUBvcL9Hv7bJdoXCMcupAYwilup1") {
        router.push("/admin");
      } else {
        router.push("/home");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Помилка авторизації:", err.message);
      } else {
        console.error("Невідома помилка", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return { signInWithEmail };
};
