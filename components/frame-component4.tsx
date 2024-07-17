import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  prop?: string;
  transaction?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  prop,
  transaction,
  propGap,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex flex-row items-start justify-start gap-[1.55rem] text-left text-[1.25rem] text-white font-montserrat ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[4.088rem] flex flex-row items-start justify-start">
        <div className="h-[4.088rem] flex-1 relative shrink-0">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[1.269rem] left-[1.269rem] w-[1.694rem] h-[1.694rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={prop}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.212rem] px-[0rem] pb-[0rem]">
        <b className="relative mq450:text-[1rem]">{transaction}</b>
      </div>
    </div>
  );
};

export default FrameComponent4;
