type MainSelectedButtonProps = {
  onClick: () => void;
};

const MainSelectedButton = ({ onClick }: MainSelectedButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border rounded-xl w-[100px] flex items-center justify-center py-3 cursor-pointer"
    >
      <p className="font-medium">메뉴</p>
    </div>
  );
};

export default MainSelectedButton;
