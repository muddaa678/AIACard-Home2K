import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  screenshot20240713At64039?: string;
  failed?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  screenshot20240713At64039,
  failed,
  propWidth,
  propFlex,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className={`w-[69.875rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[1.25rem] text-white font-montserrat mq1100:flex-wrap ${className}`}
      style={frameDiv2Style}
    >
      <div className="w-[32.612rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1100:flex-wrap">
          <img
            className="h-[4.688rem] w-[4.625rem] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={screenshot20240713At64039}
          />
          <div className="w-[22.438rem] flex flex-col items-start justify-start pt-[0.6rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.443rem]">
              <div className="self-stretch relative font-medium shrink-0 z-[1] mq450:text-[1rem]">
                CAPITAL CLUB LIMITED DXB ARE
              </div>
              <div className="w-[10.388rem] h-[1.325rem] relative inline-block shrink-0 z-[1] mq450:text-[1rem]">
                13-07-2024 16:05:23
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.562rem] pb-[0rem] pr-[0.5rem] pl-[0rem] text-salmon">
        <div className="relative inline-block min-w-[4.063rem] z-[1] mq450:text-[1rem]">
          {failed}
        </div>
      </div>
      <div className="w-[9.625rem] flex flex-col items-start justify-start gap-[0.562rem] text-right">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.312rem]">
          <div className="flex-1 relative font-medium inline-block min-w-[7rem] z-[1] mq450:text-[1rem]">
            - 6.90 EUR
          </div>
        </div>
        <button className="cursor-pointer pt-[0.375rem] px-[2.562rem] pb-[0.437rem] bg-darkslategray-300 rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[0px] border-solid border-gray-200 hover:bg-dimgray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
          <img
            className="h-[2.313rem] w-[9.625rem] relative rounded-3xs hidden"
            alt=""
            src="/rectangle-18.svg"
          />
          <div className="relative text-[1.25rem] font-light font-montserrat text-white text-center inline-block min-w-[4.5rem] z-[2]">
            25 AED
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
