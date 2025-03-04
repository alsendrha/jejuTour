import { JeJuData } from "@/types/type";
import Link from "next/link";
import MainListItemAddress from "./MainListItemAddress";
import MainListItemImage from "./MainListItemImage";
import MainListItemTag from "./MainListItemTag";
import MainListItemTitle from "./MainListItemTitle";

type MainListItemProps = {
  item: JeJuData;
  setSelectedTag: (text: string) => void;
};

const MainListItem = ({ item, setSelectedTag }: MainListItemProps) => {
  return (
    <div className="w-[300px] max-[716px]:w-[380px] border rounded-xl overflow-hidden">
      <Link href={`/main/${item.contentsid}`}>
        <MainListItemImage image={item.repPhoto.photoid.imgpath} />
        <div key={item.contentsid} className="px-2 pt-2">
          <MainListItemTitle title={item.title} />
          <MainListItemAddress
            address={item.address}
            introduction={item.introduction}
          />
        </div>
      </Link>
      <MainListItemTag
        tag={item.alltag}
        onClick={(text) => {
          console.log(text);
          setSelectedTag(text);
        }}
      />
    </div>
  );
};

export default MainListItem;
