import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
// import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";
import contests from "@/assets/data/contests";

const LeaderboardX = () => {
  const [test, setTest] = useState(contests[0].ranks);

  const handleTestChange = (event) => {
    setTest(contests[event.target.value].ranks);
  };

  return (
    <Container className={"mb-44"} style={{ marginTop: "100px" }}>
      <center>
        <h2
          className="text-3xl font-bold text-center mb-5 relative -top-1"
          id="standing"
        >
          Top ranks in latest contests
        </h2>
        <Box sx={{ width: "50%" }} className="my-6">
          <h3 className="text-white text-xl font-bold relative -top-2">
            Explore previous contests
          </h3>
          <FormControl className="w-52">
            <InputLabel id="contest-select">Contest</InputLabel>
            <Select
              onChange={handleTestChange}
              defaultValue={0}
              size="small"
              label="Contest"
              labelId="contest-select"
            >
              {contests.map((item, i) => (
                <MenuItem key={item.name} value={i}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </center>
      <hr />
      <div className="text-center mb-8 my-4">
        {test.map((item, i) => (
          <Reveal
            key={item.Rank}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={10 * (i + 1)}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              }}
            >
              <div
                style={{
                  padding: "0.2rem",
                  gridColumn: "span 1",
                }}
              >
                {item.Rank === "Rank" ? (
                  <b>{item.Team}</b>
                ) : (
                  <div>{item.Team}</div>
                )}
              </div>
              <div
                style={{
                  padding: "0.2rem",
                  gridColumn: "span 1",
                }}
              >
                {item.Rank === "Rank" ? (
                  <b>{item.Rank}</b>
                ) : (
                  <div>{item.Rank}</div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default LeaderboardX;
