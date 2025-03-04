const Skeleton = () => {
  return (
    <div className="w-[300px] border rounded-xl overflow-hidden">
      <div className="w-full h-[200px] bg-[#999999]" />
      <div className="p-2">
        <div className="mt-1 w-[130px] h-[20px] bg-[#999999] rounded-xl" />
        <div className="mt-1 w-full h-[20px] bg-[#999999] rounded-xl" />
        <div className="mt-1 w-full h-[20px] bg-[#999999] rounded-xl" />
      </div>
    </div>
  );
};

export default Skeleton;
