import create from "zustand";

interface OpenDescriptionsState {
  openDescriptions: number[];
  addDescription: (desc: number) => void;
  removeAllDescriptions: () => void;
}

export const useOpenDescriptionsStore = create<OpenDescriptionsState>(
  (set) => ({
    openDescriptions: [],
    addDescription: (desc) =>
      set((state) => ({ openDescriptions: [...state.openDescriptions, desc] })),
    removeAllDescriptions: () => set(() => ({ openDescriptions: [] })),
  })
);
