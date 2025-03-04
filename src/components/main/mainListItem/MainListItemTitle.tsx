type MainListItemTitleProps = {
  title: string;
};

const MainListItemTitle = ({ title }: MainListItemTitleProps) => {
  return <p className="text-[20px] font-medium truncate">{title}</p>;
};

export default MainListItemTitle;
