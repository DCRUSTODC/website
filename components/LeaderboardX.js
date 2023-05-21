import { top_coders } from "@/data-top-coders";
import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";

const LeaderboardX = () => {
  return (
    <Container className={"mb-44"} style={{ marginTop: "100px" }}>
      <center>
        <h2 className="text-2xl font-bold text-center mb-5">
          Top ranks in Weekly Contests
        </h2>
      </center>
      <hr />
      <div className="text-center mb-8 my-4">
        {top_coders.map((item, i) => (
          <Reveal
            key={item.id}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={100 * (i + 1)}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                marginBottom: item.id === 0 ? "0.5rem" : null,
              }}
            >
              <div
                style={{
                  maxWidth: "25rem",
                  minWidth: "25rem",
                }}
              >
                {item.id === 0 ? (
                  item.name
                ) : (
                  <a href={item.url} target={"_blank"}>
                    {item.name}
                  </a>
                )}
              </div>
              <div
                style={{
                  maxWidth: "25rem",
                  minWidth: "25rem",
                }}
              >
                {item.rank}
              </div>
              <div
                style={{
                  maxWidth: "25rem",
                  minWidth: "25rem",
                }}
              >
                {item.score}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default LeaderboardX;
