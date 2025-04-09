"use client";

import { useEffect } from "react";

import {
  getAuth,
  setPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";

import { app } from "../lib/firebase";
import { useAuthStore } from "../store/modalStore";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useAuthStore((state) => state.setUser);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        } else {
          setUser(null);
          router.push("/");
        }
      });

      return () => unsubscribe();
    });
  }, []);

  return <>{children}</>;
};
