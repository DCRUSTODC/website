import { list_team_members } from "@/assets/data/teams";
import React from "react";
import { Container, Creator } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInDownShorter2 } from "@/keyframes";

const TeamX = () => {
  return (
    <Container className={"mb-44"} id={"head"} style={{ marginTop: "5%" }}>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">We hold DCRUSTODC together</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full sm:w-[600px] mx-auto">
            From idea to implementation, we are the people behind the curtains.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list_team_members.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={100 * (i + 1)}
          >
            <Creator key={i} data={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default TeamX;
