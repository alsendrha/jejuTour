import { JeJuData } from "@/types/type";
import {
  Circle,
  GoogleMap,
  LoadScriptNext,
  Marker,
} from "@react-google-maps/api";

type DetailMapProps = {
  item: JeJuData;
};

const DetailMap = ({ item }: DetailMapProps) => {
  const options = {
    strokeColor: "#FFE600",
    strokeOpacity: 0.3,
    strokeWeight: 1,
    fillColor: "#FFE600",
    fillOpacity: 0.3,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 50,
    zIndex: 1,
  };
  const position = {
    lat: Number(item.latitude),
    lng: Number(item.longitude),
  };
  return (
    <div className="w-[600px] h-[600px] rounded-full overflow-hidden">
      <LoadScriptNext
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
      >
        <GoogleMap
          options={{
            panControl: false,
            mapTypeControl: false,
          }}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={position}
          zoom={18}
        >
          <Marker position={position} />
          <Circle center={position} options={options} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};

export default DetailMap;
