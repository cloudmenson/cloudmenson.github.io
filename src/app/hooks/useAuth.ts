// "use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "@/app/lib/firebase";

export const useFirebaseLogin = () => {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      // тут можна записати user в стор, cookies або context
      router.push("/userpage");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error:", err.message);
      } else {
        console.error("Unknown error", err);
      }
    }
  };

  return { signInWithGoogle };
};
