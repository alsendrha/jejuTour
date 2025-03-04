"use client";

import { useGetDetailData } from "@/api";
import DetailImage from "@/components/detail/DetailImage";
import DetailTag from "@/components/detail/DetailTag";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import { usePathname } from "next/navigation";

const DetailContent = () => {
  const name = usePathname().split("/")[2];
  const { data, isLoading } = useGetDetailData(name);
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-full flex justify-center pt-[90px]">
      <div className="w-[1000px] flex flex-col">
        {data?.map((item) => (
          <div key={item.contentsid}>
            <div className="w-full text-center">
              <p>{item.title}</p>
            </div>
            <DetailImage image={item.repPhoto.photoid.imgpath} />
            <p>{item.introduction}</p>
            <DetailTag item={item} />
            <div className="w-[600px] h-[600px] rounded-full overflow-hidden">
              <LoadScriptNext
                googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
              >
                <GoogleMap
                  mapContainerStyle={{
                    width: "100%",
                    height: "100%",
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
