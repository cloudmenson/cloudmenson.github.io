"use client";

import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { app } from "../lib/firebase";
import { useAuthStore } from "../store/modalStore";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useAuthStore((state) => state.setUser);
  const auth = getAuth(app);

  useEffect(() => {
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
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};
