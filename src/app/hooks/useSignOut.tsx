import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { auth } from "../lib/firebase";
import { useAuthStore } from "../store/modalStore";
import { useLoadingStore } from "../store/loadingStore";

export const useFirebaseSignOut = () => {
  const router = useRouter();

  const signOutHandler = async () => {
    const { setLoading } = useLoadingStore.getState();

    try {
      setLoading(true);
      await signOut(auth);
      useAuthStore.getState().logout();
      router.push("/");
    } catch (error) {
      console.error("Error SignOut:", error);
    } finally {
      setLoading(false);
    }
  };

  return { signOutHandler };
};
