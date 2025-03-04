import Image from "next/image";

type MainListItemImageProps = {
  image: string;
};

const MainListItemImage = ({ image }: MainListItemImageProps) => {
  return (
    <div className="w-full h-[200px] relative">
      <Image
        src={image ? image : "/images/no_image.png"}
        fill
        className="-z-10 object-cover"
        alt="이미지"
        sizes="100%"
        priority
      />
    </div>
  );
};

export default MainListItemImage;
