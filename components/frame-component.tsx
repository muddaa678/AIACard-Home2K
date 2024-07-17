import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq450:flex-wrap mq1100:flex-wrap mq1725:flex-wrap mq2350:flex-wrap ${className}`}
    >
      <div className="w-[21.881rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.887rem] box-border max-w-full">
        <button className="cursor-pointer [border:none] pt-[0.993rem] px-[6.375rem] pb-[1.106rem] bg-orangered self-stretch rounded-8xs flex flex-row items-start justify-center box-border gap-[1.1rem] shrink-0 max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[4.419rem] w-[21.881rem] relative rounded-8xs bg-orangered hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[0.331rem] px-[0rem] pb-[0rem]">
            <b className="relative text-[1.25rem] inline-block font-montserrat text-white text-left min-w-[4.975rem] z-[1] mq450:text-[1rem]">
              Logout
            </b>
          </div>
          <img
            className="h-[2.319rem] w-[2.431rem] relative object-contain z-[1]"
            alt=""
            src="/untitled-design-50-1@2x.png"
          />
        </button>
      </div>
      <div className="h-[10.563rem] w-[125.563rem] relative shrink-0 max-w-full">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full"
          alt=""
          src="/rectangle-27.svg"
        />
        <img
          className="absolute top-[1.938rem] left-[3.063rem] w-[119.375rem] h-[6.438rem] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/untitled-design-53-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
