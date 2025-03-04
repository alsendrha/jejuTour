"use client";

import { useGetData } from "@/api";
import { useSelected } from "@/store/store";
import { JeJuData } from "@/types/type";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MainListItem from "./mainListItem/MainListItem";
import MainSelect from "./select/MainSelect";
import Skeleton from "./Skeleton";

const MainList = () => {
  const [ref, inView] = useInView();
  const { isSelected } = useSelected();
  const { data, fetchNextPage, isLoading, refetch } = useGetData(isSelected);

  useEffect(() => {
    refetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isSelected]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  return (
    <div className="w-[1340px] flex flex-col justify-center px-10">
      <MainSelect />
      <div className="flex items-center justify-center flex-wrap gap-5">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : data?.pages
              .flat()
              .map((item: JeJuData) => (
                <MainListItem key={item.contentsid} item={item} />
              ))}
        <div className="w-full h-10" ref={ref} />
      </div>
    </div>
  );
};

export default MainList;
