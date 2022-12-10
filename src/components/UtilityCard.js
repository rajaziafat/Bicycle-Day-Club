import React from "react";

function UtilityCard({ img, desc }) {
  return (
    <div className="relative py-8 xl:py-10 pt-5 px-10 xl:px-14 flex flex-col items-center">
      <img
        src="images/utility-card-bg.png"
        className="absolute top-0 left-0 w-full h-full -z-10"
        alt=""
      />
      <img src={img} className="w-16 lg:w-20 xl:w-28 2xl:w-32 mb-4" alt="" />
      <p className="text-white leading-[1.6] text-10px lg:text-xs xl:text-sm 2xl:text-lg">
        {desc}
      </p>
    </div>
  );
}

export default UtilityCard;
