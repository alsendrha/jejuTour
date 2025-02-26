"use client";

import { useGetData } from "@/api";
import { useSelected } from "@/store/store";
import { JeJuData } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MainPage = () => {
  const [ref, inView] = useInView();
  const { isSelected } = useSelected();
  const { data, fetchNextPage, isLoading, refetch } = useGetData(isSelected);
  console.log("data", data);
  useEffect(() => {
    refetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isSelected]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <div className="w-full flex justify-center pt-[90px]">
      <div className="w-[1400px] flex justify-center flex-wrap gap-3 ">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-[300px] border rounded-xl overflow-hidden"
              >
                <div className="w-full h-[200px] bg-[#999999]" />
                <div className="p-2">
                  <div className="mt-1 w-[130px] h-[20px] bg-[#999999] rounded-xl" />
                  <div className="mt-1 w-full h-[20px] bg-[#999999] rounded-xl" />
                </div>
              </div>
            ))
          : data?.pages.flat().map((item: JeJuData, index) => (
              <Link
                href={`/main/${item.contentsid}`}
                key={index}
                className="w-[300px] border rounded-xl overflow-hidden"
              >
                <div className="w-full h-[200px]  relative">
                  <Image
                    src={
                      item.repPhoto.photoid.imgpath
                        ? item.repPhoto.photoid.imgpath
                        : "/images/no_image.png"
                    }
                    fill
                    className="-z-10 object-cover"
                    alt="이미지"
                    sizes="100%"
                    priority
                  />
                </div>
                <div key={item.contentsid} className="p-2">
                  <div>
                    <p className="text-[20px] font-semibold truncate">
                      {item.title}
                    </p>
                    {item.address ? (
                      <p className="truncate text-[#888888]">
                        {item.address.split(" ").slice(0, 3).join(" ")}
                      </p>
                    ) : (
                      <p className="truncate text-[#888888]">
                        {item.introduction}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        <div className="w-full h-10" ref={ref} />
      </div>
    </div>
  );
};

export default MainPage;
