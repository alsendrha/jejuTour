import { create } from "zustand";

type OpenType = {
  isSelected: string;
  selectedName: string;
  setSelectedName: (selectedName: string) => void;
  setIsSelected: (isSelected: string) => void;
};

export const useSelected = create<OpenType>((set) => ({
  isSelected: "c1",
  selectedName: "관광지",
  setIsSelected: (isSelected: string) => set({ isSelected: isSelected }),
  setSelectedName: (selectedName: string) =>
    set({ selectedName: selectedName }),
}));
