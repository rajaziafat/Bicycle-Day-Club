import React from "react";

const Line = ({ direction }) => {
  return (
    <div className="flex-[.2] lg:flex-[.5] flex items-center">
      <div className="flex items-center w-full">
        {direction === "left" && (
          <div className="w-full border-[1px] sm:border-2 border-dotted border-green flex-1"></div>
        )}
        <div
          className={`roadmap-dot w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full ${
            direction === "left"
              ? "-mr-2 sm:-mr-3 lg:-mr-4"
              : "-ml-2 sm:-ml-3 lg:-ml-4"
          }`}
        ></div>
        {direction === "right" && (
          <div className="w-full border-[1px] sm:border-2 border-dotted border-green flex-1"></div>
        )}
      </div>
    </div>
  );
};

function RoadmapCard({ direction, heading, title, desc }) {
  return (
    <div className="flex">
      {direction === "right" && <Line direction={direction} />}
      <div
        className={`roadmap-card flex-1 rounded-2xl py-4 lg:py-6 px-4 sm:px-6 ${
          direction === "left" ? "text-right" : "text-left"
        }`}
      >
        <h6 className="text-green text-10px sm:text-xs lg:text-sm 2xl:text-base uppercase mb-1 sm:mb-2">
          {heading}
        </h6>
        <h2 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white font-medium mb-2 sm:mb-4">
          {title}
        </h2>
        <p className="text-white opacity-80 text-10px sm:text-xs lg:text-sm 2xl:text-base leading-[1.6]">
          {desc}
        </p>
      </div>
      {direction === "left" && <Line direction={direction} />}
    </div>
  );
}

export default RoadmapCard;
