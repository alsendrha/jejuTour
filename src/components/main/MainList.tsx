"use client";

import { useGetData } from "@/api";
import { useSelected } from "@/store/store";
import { JeJuData } from "@/types/type";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MainListItem from "./mainListItem/MainListItem";
import MainSelect from "./select/MainSelect";
import Skeleton from "./Skeleton";

const MainList = () => {
  const [ref, inView] = useInView();
  const { isSelected } = useSelected();
  const { data, fetchNextPage, isLoading, refetch } = useGetData(isSelected, 1);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    refetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isSelected, selectedTag]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  console.log(data);

  return (
    <div className="w-[1340px] max-[1355px]:w-[1020px] max-[1036px]:w-[700px] flex flex-col justify-center px-10">
      <MainSelect setSelectedTag={setSelectedTag} />
      <div className="flex items-center flex-wrap gap-5 max-[716px]:justify-center">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : data?.pages
              .flat()
              .filter(
                (item: JeJuData) =>
                  item.alltag && item.alltag.includes(selectedTag)
              )
              .map((item: JeJuData) => (
                <MainListItem
                  key={item.contentsid}
                  item={item}
                  setSelectedTag={setSelectedTag}
                />
              ))}
        <div className="w-full h-10" ref={ref} />
      </div>
    </div>
  );
};

export default MainList;
