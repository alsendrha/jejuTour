import Image from "next/image";

type DetailImageProps = {
  image: string;
};

const DetailImage = ({ image }: DetailImageProps) => {
  return (
    <div className="w-full h-[500px] relative">
      <Image
        src={image ? image : "/images/no_image.png"}
        fill
        sizes="100%"
        alt="이미지"
      />
    </div>
  );
};

export default DetailImage;
