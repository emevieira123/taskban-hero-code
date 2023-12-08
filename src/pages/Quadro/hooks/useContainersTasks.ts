import { UniqueIdentifier } from "@dnd-kit/core";
import { create } from "zustand";
import columnsData from "../utils/columnsData";

type DNDType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
    description: string;
    endDate: string;
    priority: number;
  }[];
};

interface State {
  containers: DNDType[];
  setContainers: (containers: DNDType[]) => void;
}

export const useContainersTasks = create<State>((set) => ({
  containers: columnsData,
  setContainers: (containers) => set((state) => ({ ...state, containers })),
}));
