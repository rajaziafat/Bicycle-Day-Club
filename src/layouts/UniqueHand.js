import Title from "components/Title";
import React from "react";

function UniqueHand() {
  return (
    <div>
      <div className="mb-5 md:mb-6 lg:mb-10">
        <div className="container">
          <div>
            <Title>
              Unique Hand <span className="text-green">Design</span>
            </Title>
          </div>
        </div>
      </div>
      <div className="relative pb-20 lg:pb-36 xl:pb-200px pt-5 md:pt-6 lg:pt-10">
        <img
          src="images/hand-design-bg.png"
          className="absolute top-[-20%] sm:top-[-12%] md:top-0 left-0 w-full h-full object-cover -z-100"
          alt=""
        />

        <div className="container flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="md:flex-[.8] lg:flex-1 flex items-center justify-center w-full">
            <img
              src="images/cycle.png"
              className="w-full md:w-[90%] 2xl:w-[470px] max-w-[10rem] sm:max-w-[16rem] md:max-w-none"
              alt=""
            />
          </div>
          <div className="flex-1 text-center md:text-left max-w-[26rem] md:max-w-none mx-auto md:mx-0 bg-light-green-gradient rounded-2xl py-8 lg:py-10 px-8">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-4 lg:mb-6 xl:mb-8">
              Unique Hand <span className="text-green">Design</span>
            </h2>

            <p className="text-xs lg:text-base xl:text-xl text-white leading-[1.5] mb-4 lg:mb-6 xl:mb-8">
              The sense he my their we time. To of, that day and her in armour
              any and avoid our move that logging accompany his parameters been
              news I essential when what holding.
            </p>
            <p className="text-xs lg:text-base xl:text-xl text-white leading-[1.5]">
              The sense he my their we time. To of, that day and her in armour
              any and avoid our.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueHand;
