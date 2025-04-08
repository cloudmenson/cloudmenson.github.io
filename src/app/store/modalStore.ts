import { create } from "zustand";

interface UserData {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}
interface AuthStore {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  logout: () => void;
}
export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

interface ModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
