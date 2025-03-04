"use client";

import { useSelected } from "@/store/store";

const Title = () => {
  const { selectedName } = useSelected();
  return (
    <p className="text-4xl leading-none font-bold">
      제주도&nbsp;{selectedName}
    </p>
  );
};

export default Title;
