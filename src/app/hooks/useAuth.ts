"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";

import { useLoadingStore } from "../store/loadingStore";
import { auth, googleProvider } from "@/app/lib/firebase";

export const useFirebaseLogin = () => {
  const router = useRouter();
  const { setLoading } = useLoadingStore.getState();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);

      await signInWithPopup(auth, googleProvider);

      router.push("/user");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error:", err.message);
      } else {
        console.error("Unknown error", err);
      }
    } finally {
      setLoading(true);
    }
  };

  return { signInWithGoogle };
};
