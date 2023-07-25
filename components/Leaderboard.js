import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";
import { Button } from ".";
import contest from "@/assets/data/contests";

const Leaderboard = () => {
  return (
    <Container className={"mb-44"}>
      <center>
        <h2 className="text-2xl font-bold text-center mb-5">
          Top ranks in previous contest
        </h2>
      </center>
      <hr />
      <div className="text-center mb-8 my-4">
        {contest[0].ranks
          .filter((curr) => curr.Rank <= 5 || curr.Rank == "Rank")
          .map((item, i) => (
            <Reveal
              key={item.Rank}
              keyframes={fadeInDownShorter}
              duration={500}
              delay={100 * (i + 1)}
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
      <div className="text-center">
        <Button isLink href={"/standings#standing"} variant={"outline-primary"}>
          Final standings
        </Button>
      </div>
    </Container>
  );
};

export default Leaderboard;
