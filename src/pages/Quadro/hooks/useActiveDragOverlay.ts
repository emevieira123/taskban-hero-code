import { UniqueIdentifier } from "@dnd-kit/core";
import { create } from "zustand";

interface State {
  activeId: UniqueIdentifier | null;
  setActiveId: (activeId: UniqueIdentifier | null) => void;
}

export const useActiveDragOverlay = create<State>((set) => ({
  activeId: null,
  setActiveId: (activeId) => set((state) => ({ ...state, activeId })),
}));
