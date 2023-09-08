import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
// import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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
            <h3 className="text-xl text-white font-bold relative -top-2">
            Explore previous teams
            </h3>
              {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Explore previous teams
              </InputLabel> */}
            <FormControl className="w-52" size="small" >
              <InputLabel id="team-label">Team</InputLabel>
              <Select 
              onChange={handleTestChange}
              label="Team"
              labelId="team-label"
              >
                {teams.map((item, i) => (
                  <MenuItem key={item.contest} value={i}  >
                    {item.contest}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
