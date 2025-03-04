import Image from "next/image";

type MainListItemImageProps = {
  image: string;
};

const MainListItemImage = ({ image }: MainListItemImageProps) => {
  return (
    <div className="w-full h-[200px] max-[716px]:h-[350px] relative">
      <Image
        src={image ? image : "/images/no_image.png"}
        fill
        className="-z-10 object-cover object-top"
        alt="이미지"
        sizes="100%"
        priority
      />
    </div>
  );
};

export default MainListItemImage;
