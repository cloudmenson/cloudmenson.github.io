import { signOut } from "firebase/auth";

import { auth } from "@/app/lib/firebase";
import { notifyError } from "@/app/components";
import { useAuthStore } from "@/app/store/modalStore";
import { useLoadingStore } from "@/app/store/loadingStore";

export const useFirebaseSignOut = () => {
  const signOutHandler = async () => {
    const { setLoading } = useLoadingStore.getState();

    try {
      setLoading(true);

      await signOut(auth);
      useAuthStore.getState().logout();
    } catch (error) {
      notifyError("" + error);
    } finally {
      setLoading(false);
    }
  };

  return { signOutHandler };
};
