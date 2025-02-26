"use client";

import { useSelected } from "@/store/store";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const { setIsSelected } = useSelected();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("관광지");
  const menuList = [
    { name: "관광지", code: "c1" },
    { name: "쇼핑", code: "c2" },
    { name: "숙박", code: "c3" },
    { name: "음식점", code: "c4" },
    { name: "축제/행사", code: "c5" },
    { name: "테마여행", code: "c6" },
  ];

  return (
    <div className="w-full h-[90px] px-3 flex items-center justify-between fixed bg-white bg-opacity-90 z-10">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border rounded-xl p-3 cursor-pointer"
      >
        <p>버튼</p>
      </div>
      <Link href={"/"} className="flex items-center">
        <p className="text-4xl leading-none font-bold">제주도&nbsp;{title}</p>
      </Link>
      <div className="border rounded-xl p-3 opacity-0">
        <p>버튼</p>
      </div>
      {isOpen && (
        <div className="absolute top-20 w-[100px] border rounded-xl bg-white overflow-hidden">
          <ul>
            {menuList.map((item) => (
              <li
                key={item.code}
                className="w-full flex items-center justify-center h-8 cursor-pointer active:bg-gray-300 "
                onClick={() => {
                  setIsSelected(item.code);
                  setIsOpen(false);
                  setTitle(item.name);
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

export default Nav;
