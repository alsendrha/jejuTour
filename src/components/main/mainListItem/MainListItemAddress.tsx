type MainListItemAddressProps = {
  address: string;
  introduction: string;
};

const MainListItemAddress = ({
  address,
  introduction,
}: MainListItemAddressProps) => {
  return (
    <>
      {address ? (
        <p className="truncate text-[#888888]">
          {address.split(" ").slice(0, 3).join(" ")}
        </p>
      ) : (
        <p className="truncate text-[#888888]">{introduction}</p>
      )}
    </>
  );
};

export default MainListItemAddress;
