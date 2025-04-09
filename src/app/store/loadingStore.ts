// src/store/loadingStore.ts
import { create } from "zustand";

interface LoadingStore {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
}));
