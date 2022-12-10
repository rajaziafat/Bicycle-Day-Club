import Title from "components/Title";
import UtilityCard from "components/UtilityCard";
import React from "react";

function Utility() {
  return (
    <div>
      <div className="container">
        <div className="mb-12 lg:mb-16 xl:mb-20">
          <div className="mb-4 lg:mb-6 xl:mb-8">
            <Title>
              The <span className="text-green">Utility</span>
            </Title>
          </div>

          <p className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-center text-white max-w-[30em] mx-auto leading-[1.5] opacity-80 font-light">
            Orthographic impasse. Commas, achieves physics of design of anyone
            in rewritten eyes would and kind goals as was state and stash of is
            how gets negatives,{" "}
          </p>
        </div>

        <div className="relative grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 w-full max-w-[14rem] xs:max-w-[26rem] lg:max-w-none mx-auto lg:mx-0 items-stretch">
          <UtilityCard
            img="images/eye-1.png"
            desc="Line fur very history; Time. Little. Follow expected win in star were name on is trust,"
          />
          <UtilityCard
            img="images/eye-2.png"
            desc="Belt have subjective and each headboard won't to thousands let up intrigued ridden a the tones. "
          />
          <UtilityCard
            img="images/eye-1.png"
            desc="Line fur very history; Time. Little. Follow expected win in star were name on is trust, "
          />
          <UtilityCard
            img="images/eye-2.png"
            desc="Line fur very history; Time. Little. Follow expected win in star were name on is trust, rely this that of too, "
          />

          <img
            src="images/green-blob.png"
            className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[90%] -z-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Utility;
