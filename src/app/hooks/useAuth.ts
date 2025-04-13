"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/app/lib/firebase";
import { notifyError } from "@/app/components";
import { useLoadingStore } from "@/app/store/loadingStore";

export const useAuth = () => {
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

      const token = await userCredential.user.getIdToken();
      setCookie("token", token, {
        path: "/",
        maxAge: 60 * 60 * 24, // 1 день
      });

      if (userCredential.user.uid === "dUBvcL9Hv7bJdoXCMcupAYwilup1") {
        router.push("/admin");
      } else {
        router.push("/home");
      }
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

  return { signInWithEmail };
};
