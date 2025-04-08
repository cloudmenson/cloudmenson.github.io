// "use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "@/app/lib/firebase";
import { useAuthStore } from "../store/modalStore";

export const useFirebaseLogin = () => {
  const router = useRouter();

  const { setUser, user } = useAuthStore();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user.email);

      const userData = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };

      setUser(userData);

      console.log("Успішний вхід:", user);

      // тут можна записати user в стор, cookies або context
      router.push("/userpage");
    } catch (err: any) {
      console.error("Помилка входу:", err.message);
    }
  };

  return { signInWithGoogle };
};
