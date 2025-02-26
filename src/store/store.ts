import { create } from "zustand";

type OpenType = {
  isSelected: string;
  setIsSelected: (isSelected: string) => void;
};

export const useSelected = create<OpenType>((set) => ({
  isSelected: "c1",
  setIsSelected: (isSelected: string) => set({ isSelected: isSelected }),
}));
