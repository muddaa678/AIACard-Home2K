import type { NextPage } from "next";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[2.5rem] text-white font-montserrat mq1725:flex-wrap ${className}`}
    >
      <div className="w-[71.375rem] flex flex-row items-end justify-start gap-[5.437rem] max-w-full mq1100:flex-wrap mq1100:gap-[1.375rem] mq1725:gap-[2.688rem]">
        <div className="h-[6.563rem] w-[21.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.687rem] box-border min-w-[21.875rem] max-w-full mq1100:flex-1 mq1100:min-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1100:self-stretch mq1100:w-auto"
            loading="lazy"
            alt=""
            src="/ai-analysis-logo-13-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[28.625rem] max-w-full mq1100:min-w-full">
          <h1 className="m-0 w-[36.875rem] relative text-inherit font-bold font-inherit inline-block whitespace-nowrap max-w-full">
            <span>{`Welcome back, `}</span>
            <span className="text-goldenrod">Muddashir!</span>
          </h1>
          <div className="relative text-[1.25rem] leading-[1.531rem] whitespace-nowrap">{`Apply, recharge, transfer, and manage your AIA Cards - all in one place!  `}</div>
        </div>
      </div>
      <div className="w-[21.813rem] rounded-3xs box-border flex flex-row items-start justify-start pt-[0.625rem] px-[1.437rem] pb-[0.937rem] gap-[1.775rem] max-w-full text-[3rem] text-gray-200 border-[2px] border-solid border-gray-200 mq450:flex-wrap">
        <div className="h-[7.625rem] w-[21.813rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-gray-200" />
        <div className="h-[5.75rem] w-[5.75rem] relative">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod box-border w-full h-full z-[1] border-[0px] border-solid border-gray-200" />
          <a className="[text-decoration:none] absolute top-[1.213rem] left-[1.544rem] font-bold text-[inherit] inline-block w-[3.869rem] h-[4.419rem] z-[2]">
            M
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[2.1rem] px-[0rem] pb-[0rem] text-[1.25rem] text-white">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7rem] z-[1]">
            Muddashir
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.85rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.813rem] h-[2rem] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/muddashir-siddique-2-1@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
