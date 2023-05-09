import { top_coders } from "@/data";
import React from "react";
import { Container, Creator } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInDownShorter2 } from "@/keyframes";

const Leaderboard = () => {
    return (
        <Container className={"mb-44"} id={"team"}>
            <center>
                <h2 className="text-2xl font-bold text-center mb-5">
                Cumulative standings for weekly contests
                </h2>
            </center>
            <hr />
            <div className="text-center mb-8 my-4">
                {top_coders.map((item, i) => (
                    <div style={{}}>
                        <Reveal
                            key={i}
                            keyframes={fadeInDownShorter}
                            duration={500}
                            delay={100 * (i + 1)}
                        >
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "auto auto auto",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: "25rem",
                                        minWidth: "25rem",
                                    }}
                                >
                                    {item.name}
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
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Leaderboard;
