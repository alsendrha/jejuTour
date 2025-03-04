"use client";

import { useGetDetailData } from "@/api";
import DetailImage from "@/components/detail/DetailImage";
import DetailMap from "@/components/detail/DetailMap";
import DetailTag from "@/components/detail/DetailTag";

import { usePathname } from "next/navigation";

const DetailContent = () => {
  const name = usePathname().split("/")[2];
  const { data, isLoading } = useGetDetailData(name);

  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-full flex justify-center pt-[90px]">
      <div className="w-[1000px] flex flex-col">
        {data?.map((item) => {
          return (
            <div key={item.contentsid}>
              <div className="w-full text-center">
                <p>{item.title}</p>
              </div>
              <DetailImage image={item.repPhoto.photoid.imgpath} />
              <p>{item.introduction}</p>
              <DetailTag item={item} />
              <DetailMap item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DetailPage = () => {
  return <DetailContent />;
};

export default DetailPage;
