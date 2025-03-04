import { JeJuData } from "@/types/type";
import Link from "next/link";
import MainListItemAddress from "./MainListItemAddress";
import MainListItemImage from "./MainListItemImage";
import MainListItemTitle from "./MainListItemTitle";

type MainListItemProps = {
  item: JeJuData;
};

const MainListItem = ({ item }: MainListItemProps) => {
  return (
    <Link
      href={`/main/${item.contentsid}`}
      className="w-[300px] border rounded-xl overflow-hidden"
    >
      <MainListItemImage image={item.repPhoto.photoid.imgpath} />
      <div key={item.contentsid} className="p-2">
        <MainListItemTitle title={item.title} />
        <MainListItemAddress
          address={item.address}
          introduction={item.introduction}
        />
      </div>
    </Link>
  );
};

export default MainListItem;
