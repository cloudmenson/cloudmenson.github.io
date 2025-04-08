import { signOut } from "firebase/auth";

import { auth } from "../lib/firebase";
import { useAuthStore } from "../store/modalStore";

export const useFirebaseSignOut = async () => {
  try {
    await signOut(auth);

    useAuthStore.getState().logout();
  } catch (error) {
    console.error("Error SignOut:", error);
  }
};
