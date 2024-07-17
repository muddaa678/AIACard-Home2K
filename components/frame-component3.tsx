import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;
  screenshot20240713At55100?: string;
  transfer?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  screenshot20240713At55100,
  transfer,
  propWidth,
  propPadding,
  propFlex,
  propMinWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propPadding, propFlex, propMinWidth]);

  return (
    <div
      className={`w-[5.688rem] flex flex-col items-end justify-start py-[0rem] pr-[0.312rem] pl-[0rem] box-border gap-[1.106rem] text-center text-[1.25rem] text-white font-montserrat ${className}`}
      style={frameDiv1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.125rem] pl-[0.25rem]">
        <div className="flex-1 flex flex-row items-start justify-start shrink-0 z-[3]">
          <div className="h-[4.913rem] flex-1 relative">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
            <img
              className="absolute top-[1.544rem] left-[1.544rem] w-[1.963rem] h-[1.825rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src={screenshot20240713At55100}
            />
          </div>
        </div>
      </div>
      <b className="relative inline-block min-w-[5.375rem] shrink-0 z-[3] mq450:text-[1rem]">
        {transfer}
      </b>
    </div>
  );
};

export default FrameComponent3;
