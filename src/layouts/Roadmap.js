import { useState, useRef, useEffect } from "react";
import RoadmapCard from "components/RoadmapCard";
import Title from "components/Title";

function Roadmap() {
  const roadmap = useRef(null);
  const roadmapLine = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handler = () => {
      let a = window.scrollY - roadmap.current["offsetTop"];
      let value = a + window.innerHeight / 2;
      setValue(value);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  return (
    <div className="relative py-14" ref={roadmap}>
      <div className="container">
        <div className="mb-12 md:mb-16 xl:mb-20">
          <Title>
            Road Map to the <span className="text-green">Moon</span>
          </Title>
        </div>

        <div className="grid grid-cols-2 w-full max-w-[836px] mx-auto relative">
          <div className="roadmap-line rounded-full absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-transparent overflow-y-hidden">
            <div
              ref={roadmapLine}
              className="w-full bg-green"
              style={{ height: value + "px" }}
            ></div>
          </div>

          <div className="space-y-12">
            <RoadmapCard
              direction="left"
              heading="phase-01"
              title="Planning"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="left"
              heading="phase-03"
              title="Launch"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="left"
              heading="phase-05"
              title="New bicycle"
              desc="Quality comes first. we took our time to plan out everything and"
            />
          </div>
          <div className="space-y-12 pt-20 lg:pt-100px">
            <RoadmapCard
              direction="right"
              heading="phase-02"
              title="Productions"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="right"
              heading="phase-04"
              title="Minting"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="right"
              heading="phase-06"
              title="Metaverse"
              desc="Quality comes first. we took our time to plan out everything and"
            />
          </div>
        </div>
      </div>

      <img
        src="images/roadmap-bg.png"
        className="absolute top-0 left-0 w-full h-full -z-100 object-contain"
        alt=""
      />
    </div>
  );
}

export default Roadmap;
