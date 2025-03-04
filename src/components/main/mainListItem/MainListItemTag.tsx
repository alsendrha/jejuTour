type MainListItemTagProps = {
  tag: string;
  onClick: (text: string) => void;
};

const MainListItemTag = ({ tag, onClick }: MainListItemTagProps) => {
  return (
    <div className="px-2 pb-2">
      <p className="truncate">
        {tag
          ?.split(",")
          .flatMap((tag) => {
            const trimmedTag = tag.trim();
            // 태그가 비어있지 않고 '#'이 포함되지 않으면 '#태그'로 변환
            return trimmedTag && !trimmedTag.startsWith("#")
              ? `#${trimmedTag}`
              : trimmedTag;
          })
          .map((tag, index) => (
            <span
              key={index}
              className="text-blue-500 cursor-pointer mr-1"
              onClick={() => onClick(tag.includes("#") ? tag.slice(1) : tag)}
            >
              {tag}
            </span>
          ))}
      </p>
    </div>
  );
};

export default MainListItemTag;
