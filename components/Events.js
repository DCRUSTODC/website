import { events_list } from "@/assets/data/events";
import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";

const Events = () => {
    return (
        <Container className={"mb-44"} style={{ marginTop: "100px" }}>
            <center>
                <h2 className="text-2xl font-bold text-center mb-5">
                    Recent events
                </h2>
            </center>
            <hr />
            <div className="text-center mb-8 my-4">
                {events_list.map((item, i) => (
                    <Reveal
                        key={item.id}
                        keyframes={fadeInDownShorter}
                        duration={500}
                        delay={100 * (i + 1)}
                    >
                        <div
                            style={{
                                display: "grid",
                                gap: "10px",
                                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                                border: "0.1px solid #B0B9DD",
                            }}
                        >
                            <div
                                style={{
                                    padding: "0.4rem",
                                    gridColumn: "span 1",
                                }}
                            >
                                {item.title}
                            </div>
                            <div
                                style={{
                                    padding: "0.4rem",
                                    gridColumn: "span 1",
                                }}
                            >
                                {item.date}
                            </div>
                            <div
                                style={{
                                    padding: "0.4rem",
                                    gridColumn: "span 1",
                                }}
                            >
                                <a href={item.url}>URL</a>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Container>
    );
};

export default Events;
