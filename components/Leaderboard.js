import { top_coders } from "@/assets/data/top-coders";
import React, { useEffect, useState } from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";
import { Button } from ".";

const Leaderboard = () => {
    return (
        <Container className={"mb-44"}>
            <center>
                <h2 className="text-2xl font-bold text-center mb-5">
                    Top ranks in Weekly Contests
                </h2>
            </center>
            <hr />
            <div className="text-center mb-8 my-4">
                {top_coders
                    .filter((curr) => curr.rank <= 3 || curr.id <= 3)
                    .map((item, i) => (
                        <Reveal
                            key={item.id}
                            keyframes={fadeInDownShorter}
                            duration={500}
                            delay={100 * (i + 1)}
                        >
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(2, minmax(0,1fr))",
                                    marginBottom:
                                        item.id === 0 ? "0.5rem" : null,
                                }}
                            >
                                <div
                                    style={{
                                        padding: "0.2rem",
                                        gridColumn: "span 1",
                                    }}
                                >
                                    <a href={item.url} target={"_blank"}>
                                        {item.name}
                                    </a>
                                </div>
                                <div
                                    style={{
                                        padding: "0.2rem",
                                        gridColumn: "span 1",
                                    }}
                                >
                                    {item.rank}
                                </div>
                            </div>
                        </Reveal>
                    ))}
            </div>
            <div className="text-center">
                <Button isLink href={"/standings"} variant={"outline-primary"}>
                    Final standings
                </Button>
            </div>
        </Container>
    );
};

export default Leaderboard;
