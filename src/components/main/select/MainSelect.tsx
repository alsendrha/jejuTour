"use client";

import { useSelected } from "@/store/store";
import { menuList } from "@/utils/listData";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import MainSelectedButton from "./MainSelectedButton";

type MainSelectProps = {
  setSelectedTag: (tag: string) => void;
};

const MainSelect = ({ setSelectedTag }: MainSelectProps) => {
  const { setIsSelected, setSelectedName } = useSelected();
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  return (
    <div className="w-full relative flex justify-end mb-10">
      <MainSelectedButton onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="absolute top-14 w-[100px] border rounded-xl bg-white overflow-hidden z-10">
          <ul>
            {menuList.map((item) => (
              <li
                key={item.code}
                className="w-full flex items-center justify-center h-8 cursor-pointer active:bg-gray-300"
                onClick={() => {
                  setIsSelected(item.code);
                  setIsOpen(false);
                  setSelectedName(item.name);
                  setSelectedTag("");
                  queryClient.removeQueries({ queryKey: ["jeju"] });
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainSelect;
