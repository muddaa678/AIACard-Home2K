import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[43.75rem] rounded-3xs box-border flex flex-col items-end justify-start pt-[3.65rem] px-[4.187rem] pb-[3.625rem] gap-[2.75rem] max-w-full z-[2] text-left text-[1.25rem] text-black font-montserrat border-[0px] border-solid border-gray-200 mq450:pt-[1.563rem] mq450:pb-[1.563rem] mq450:box-border mq1100:gap-[1.375rem] mq1100:py-[2.375rem] mq1100:px-[2.063rem] mq1100:box-border ${className}`}
    >
      <img
        className="w-[43.75rem] h-[57.188rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-12.svg"
      />
      <div className="self-stretch flex flex-col items-end justify-start gap-[2.543rem] max-w-full mq1100:gap-[1.25rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.2rem] max-w-full mq1100:gap-[1.125rem]">
          <div className="w-[34.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.187rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.8rem] max-w-full mq1100:flex-wrap">
              <div className="flex-1 rounded-8xs bg-goldenrod box-border flex flex-row items-start justify-start py-[0.875rem] pr-[1.125rem] pl-[1.312rem] gap-[0.993rem] min-w-[12.438rem] z-[3] border-[1px] border-solid border-goldenrod mq450:flex-wrap">
                <div className="h-[3.65rem] w-[19.119rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
                <b className="flex-1 relative inline-block min-w-[9.063rem] z-[1] mq450:text-[1rem]">
                  Muddashir Personal
                </b>
                <div className="w-[1.656rem] rounded-6xl bg-black flex flex-row items-start justify-start pt-[0.112rem] px-[0.437rem] pb-[0.106rem] box-border z-[1] text-goldenrod">
                  <div className="h-[1.656rem] w-[1.656rem] relative rounded-6xl bg-black hidden" />
                  <b className="h-[1.438rem] relative inline-block [transform:_rotate(-180deg)] z-[1] mq450:text-[1rem]">
                    ^
                  </b>
                </div>
              </div>
              <div className="w-[13.188rem] flex flex-col items-start justify-start pt-[1.037rem] px-[0rem] pb-[0rem] box-border text-white">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <div className="h-[3.688rem] w-[15.063rem] absolute !m-[0] top-[-1.062rem] left-[calc(50%_-_120.5px)] rounded-8xs box-border border-[2px] border-solid border-gray-200" />
                  <div className="flex-1 relative font-light z-[1] mq450:text-[1rem]">
                    + Add New AIA Card
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-[21.938rem] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/14@2x.png"
          />
        </div>
        <div className="w-[34.563rem] flex flex-row items-start justify-end py-[0rem] px-[0.937rem] box-border max-w-full text-center text-white">
          <div className="flex-1 flex flex-row items-start justify-start gap-[2.375rem] max-w-full mq1100:flex-wrap mq1100:gap-[1.188rem]">
            <div className="w-[6.313rem] flex flex-col items-start justify-start gap-[0.825rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.437rem]">
                <div className="flex-1 flex flex-row items-start justify-start shrink-0 z-[3]">
                  <div className="h-[5.194rem] flex-1 relative">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
                    <img
                      className="absolute top-[1.681rem] left-[1.681rem] w-[1.825rem] h-[1.963rem] object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/screenshot-20240713-at-55100pm@2x.png"
                    />
                  </div>
                </div>
              </div>
              <b className="relative inline-block min-w-[6.313rem] shrink-0 z-[3] mq450:text-[1rem]">
                Recharge
              </b>
            </div>
            <FrameComponent3
              screenshot20240713At55100="/screenshot-20240713-at-55100pm-1@2x.png"
              transfer="Transfer"
            />
            <FrameComponent3
              screenshot20240713At55100="/screenshot-20240713-at-55104pm@2x.png"
              transfer="View Pin"
              propWidth="5.813rem"
              propPadding="unset"
              propFlex="unset"
              propMinWidth="unset"
            />
            <FrameComponent3
              screenshot20240713At55100="/screenshot-20240713-at-55110pm@2x.png"
              transfer="Report Loss"
              propWidth="unset"
              propPadding="unset"
              propFlex="1"
              propMinWidth="5.063rem"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.25rem] pl-[0.687rem] box-border max-w-full text-center text-white">
        <div className="flex-1 rounded-8xs bg-gray-200 flex flex-col items-end justify-start pt-[2.187rem] pb-[2.437rem] pr-[2.125rem] pl-[1.687rem] box-border gap-[2rem] max-w-full z-[3] mq1100:gap-[1rem]">
          <div className="w-[34.438rem] h-[9.313rem] relative rounded-8xs bg-gray-200 hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq1100:flex-wrap">
            <b className="w-[9.75rem] relative inline-block shrink-0 z-[4] mq450:text-[1rem]">
              Monthly Limit
            </b>
            <div className="w-[12.125rem] relative text-right inline-block shrink-0 z-[4] mq450:text-[1rem]">
              <span>€23,456/</span>
              <b>€100,000</b>
            </div>
          </div>
          <div className="self-stretch h-[1rem] relative rounded-31xl bg-darkslategray-100 box-border z-[4] border-[1px] border-solid border-gray-100">
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-darkslategray-100 box-border w-full h-full hidden z-[4] border-[1px] border-solid border-gray-100" />
            <div className="absolute top-[0.125rem] left-[0.188rem] rounded-31xl bg-goldenrod w-[11.563rem] h-[0.688rem] z-[5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
