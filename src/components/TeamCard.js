import React from "react";

function TeamCard({ img, title, desc }) {
  return (
    <div className="bg-light-gray shadow-team-card rounded-2xl py-8 xl:py-10 px-6 xl:px-10 flex flex-col items-center text-center">
      <img src={img} alt="" className="w-[40%] lg:w-[40%] mb-4 lg:mb-6" />

      <h4 className="text-center text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-3 lg:mb-5 2xl:mb-6">
        {title}
      </h4>

      <p className="text-center text-10px lg:text-xs xl:text-base text-white leading-[1.6]">
        {desc}
      </p>
    </div>
  );
}

export default TeamCard;
