import Image from "next/image";
import Link from "next/link";
import Title from "./nav/Title";

const Nav = () => {
  return (
    <div className="w-full h-[90px] px-10 flex items-center justify-between fixed bg-white bg-opacity-90 z-50">
      <Link href={"/"} className="w-[100px] h-[72px] relative">
        <Image src={"/images/logo.png"} fill sizes="100%" alt="로고" />
      </Link>
      <div className="flex items-center">
        <Title />
      </div>

      <div className="w-[100px] opacity-0" />
    </div>
  );
};

export default Nav;
