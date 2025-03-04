import { JeJuData } from "@/types/type";

type DetailTagProps = {
  item: JeJuData;
};

const DetailTag = ({ item }: DetailTagProps) => {
  return (
    <div>
      <p>
        {item.alltag
          ?.split(",")
          .flatMap((tag) => (tag.trim() ? `#${tag.trim()}` : []))
          .join(", ")}
      </p>
    </div>
  );
};

export default DetailTag;
