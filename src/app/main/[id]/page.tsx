"use client";

import { useGetDetailData } from "@/api";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DetailContent = () => {
  const name = usePathname().split("/")[2];
  const { data, isLoading } = useGetDetailData(name);
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
              <p>
                {item.alltag
                  ?.split(",")
                  .flatMap((tag) => (tag.trim() ? `#${tag.trim()}` : []))
                  .join(", ")}
              </p>
            </div>
            <div>
              <LoadScriptNext
                googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
              >
                <GoogleMap
                  mapContainerStyle={{
                    width: "100%",
                    height: "500px",
                  }}
                  center={{
                    lat: Number(item.latitude),
                    lng: Number(item.longitude),
                  }}
                  zoom={18}
                >
                  <Marker
                    position={{
                      lat: Number(item.latitude),
                      lng: Number(item.longitude),
                    }}
                  />
                </GoogleMap>
              </LoadScriptNext>
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
