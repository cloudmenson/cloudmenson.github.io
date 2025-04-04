import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;

  isOpenMentor: boolean;
  openMentor: () => void;
  closeMentor: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),

  isOpenMentor: false,
  openMentor: () => set({ isOpenMentor: true }),
  closeMentor: () => set({ isOpenMentor: false }),
}));
