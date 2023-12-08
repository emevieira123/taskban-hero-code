import { create } from "zustand";

interface State {
  selected: number | undefined;
  setSelected: (selected: number | undefined) => void;
}

export const useSelectedPriority = create<State>((set) => ({
  selected: undefined,
  setSelected: (selected) => set((state) => ({ ...state, selected })),
}));
