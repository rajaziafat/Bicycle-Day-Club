import TeamCard from "components/TeamCard";
import Title from "components/Title";
import React from "react";

function Team() {
  return (
    <div className="relative overflow-visible">
      <div className="container">
        <div className="mb-12 lg:mb-16">
          <Title>
            The Psychonauts <span className="text-green">Team</span>
          </Title>
        </div>
        <div className="grid max-w-[18rem] mx-auto md:mx-0 md:max-w-none md:grid-cols-3 gap-6 lg:gap-10">
          <TeamCard
            title="Psychonauts T"
            img="images/team-img-1.png"
            desc="Parents' the scarfs, according been typically at big these posts, that was can if your not, next the a an packed."
          />
          <TeamCard
            title="Psychonauts T"
            img="images/team-img-2.png"
            desc="Parents' the scarfs, according been typically at big these posts, that was can if your not, next the a an packed."
          />
          <TeamCard
            title="Psychonauts T"
            img="images/team-img-3.png"
            desc="Parents' the scarfs, according been typically at big these posts, that was can if your not, next the a an packed."
          />
        </div>
      </div>

      <img
        src="images/team-bg.png"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-100 object-cover"
        alt=""
      />
    </div>
  );
}

export default Team;
