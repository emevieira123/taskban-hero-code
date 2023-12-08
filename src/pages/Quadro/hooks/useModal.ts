import { create } from "zustand";

interface State {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<State>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ ...state, isOpen: true })),
  onClose: () => set((state) => ({ ...state, isOpen: false })),
}));
