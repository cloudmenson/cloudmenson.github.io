"use client";

import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/app/lib/firebase";
import { notifyError } from "@/app/components";
import { useLoadingStore } from "@/app/store/loadingStore";

export const useSignUp = () => {
  const router = useRouter();
  const { setLoading } = useLoadingStore.getState();

  const signUpWithEmail = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);

      router.push("/home");
    } catch (err: unknown) {
      if (err instanceof Error) {
        notifyError(err.message);
      } else {
        notifyError("" + err);
      }
    } finally {
      setLoading(false);
    }
  };

  return { signUpWithEmail };
};
