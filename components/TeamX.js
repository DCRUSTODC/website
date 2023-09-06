import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import teams from "@/assets/data/teams";
import React, { useState } from "react";
import { Container, Creator } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInDownShorter2 } from "@/keyframes";

const TeamX = () => {
  const [currentTeam, setCurrentTeam] = useState(teams[0].data);
  const handleTestChange = (event) => {
    setCurrentTeam(teams[event.target.value].data);
  };
  return (
    <Container className={"mb-44"} id={"head"} style={{ marginTop: "5%" }}>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">We hold DCRUSTODC together</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full sm:w-[600px] mx-auto">
            From idea to implementation, we are the people behind the curtains.
          </p>
          <center>
            <Box sx={{ width: "50%" }} className="my-6">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Explore previous teams
              </InputLabel>
              <NativeSelect onChange={handleTestChange}>
                {teams.map((item, i) => (
                  <option key={item.contest} value={i}>
                    {item.contest}
                  </option>
                ))}
              </NativeSelect>
            </Box>
          </center>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentTeam.map((item, i) => (
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
