"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";

import { notifyError } from "@/app/components";
import { auth, googleProvider } from "@/app/lib/firebase";
import { useLoadingStore } from "@/app/store/loadingStore";

export const useFirebaseLogin = () => {
  const router = useRouter();
  const { setLoading } = useLoadingStore.getState();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);

      await signInWithPopup(auth, googleProvider);

      router.push("/home");
    } catch (err: unknown) {
      if (err instanceof Error) {
        notifyError(err.message);
      } else {
        notifyError("" + err);
      }
    } finally {
      setLoading(true);
    }
  };

  return { signInWithGoogle };
};
