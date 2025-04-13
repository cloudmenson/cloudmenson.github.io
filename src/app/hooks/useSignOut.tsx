import { signOut } from "firebase/auth";
import { deleteCookie } from "cookies-next";

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

      deleteCookie("token");
    } catch (error) {
      notifyError("" + error);
    } finally {
      setLoading(false);
    }
  };

  return { signOutHandler };
};
