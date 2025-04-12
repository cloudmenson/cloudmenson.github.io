import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { useLoadingStore } from "@/app/store/loadingStore";
import { notifyError, notifySuccess } from "@/app/components";

export const useResetPassword = () => {
  const { setLoading } = useLoadingStore.getState();

  const resetPassword = async (email: string) => {
    try {
      setLoading(true);

      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);

      notifySuccess(
        "A recovery message has been sent to the email address provided"
      );
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

  return { resetPassword };
};
