import React from "react";

function BlotingPaper() {
  return (
    <div className="relative">
      <div className="container flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16 2xl:space-x-28 max-w-[24rem] md:max-w-none">
        <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-semibold mb-6 xl:mb-10 capitalize leading-[1.3]">
            The <span className="text-green">Blotting paper</span> card
          </h1>

          <p className="text-xs lg:text-base xl:text-lg 2xl:text-xl text-white leading-[1.6] mb-6 xl:mb-10">
            On then sick and six the origin better economics sitting a and
            smaller get the human question. Eightypercent was, by more a
            proceeded you my dull need blind.
          </p>
          <p className="text-xs lg:text-base xl:text-lg 2xl:text-xl text-white leading-[1.6]">
            Derivative this desk, lie our according hasn't their picture no
            planning sister incentive very one for able they're he back just and
            in the certainly and of post as,
          </p>

          {/* <button className="text-xs xl:text-sm 2xl:text-base gradient-button py-2 sm:py-3 2xl:py-4 px-6 sm:px-8">
            CONTACT US
          </button> */}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <img
            src="images/puzzel.png"
            className="w-full md:w-[90%] xl:w-full"
            alt=""
          />
        </div>
      </div>

      <img
        src="images/green-blob.png"
        className="absolute top-1/2 -translate-y-1/2 left-[-40%] w-[90%] -z-100"
        alt=""
      />
    </div>
  );
}

export default BlotingPaper;
