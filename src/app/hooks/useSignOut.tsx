import { signOut } from "firebase/auth";

import { auth } from "../lib/firebase";
import { useAuthStore } from "../store/modalStore";
import { useLoadingStore } from "../store/loadingStore";

export const useFirebaseSignOut = () => {
  const signOutHandler = async () => {
    const { setLoading } = useLoadingStore.getState();

    try {
      setLoading(true);
      await signOut(auth);
      useAuthStore.getState().logout();
    } catch (error) {
      console.error("Error SignOut:", error);
    } finally {
      setLoading(false);
    }
  };

  return { signOutHandler };
};
