"use client";

import { useGetDetailData } from "@/api";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DetailContent = () => {
  const name = usePathname().split("/")[2];
  const { data, isLoading } = useGetDetailData(name);
  console.log("data", data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-full flex justify-center pt-[90px]">
      <div className="w-[1000px] flex flex-col">
        {data?.map((item) => (
          <div key={item.contentsid}>
            <div className="w-full text-center">
              <p>{item.title}</p>
            </div>
            <div className="w-full h-[500px] relative">
              <Image
                src={
                  item.repPhoto.photoid.imgpath
                    ? item.repPhoto.photoid.imgpath
                    : "/images/no_image.png"
                }
                fill
                sizes="100%"
                alt="이미지"
              />
            </div>
            <div>
              <p>{item.introduction}</p>
              <p>{item.alltag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailPage = () => {
  return <DetailContent />;
};

export default DetailPage;
