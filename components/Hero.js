import React from "react";
import { Button, Container } from ".";
import { Slide, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "@/keyframes";
import Image from "next/image";
import herobg from "../assets/dcrustodc.svg";

const Hero = () => {
  return (
    <Container
      className={"flex flex-col sm:flex-row mt-20 mb-32"}
      style={{ marginTop: "5%" }}
    >
      <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10">
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className="text-3xl lg:text-6xl font-bold mb-5">
            The open source community of DCRUST.
          </h1>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className="mb-8 opacity-50">
            For the first time in history, for students of DCRUST contributing
            to open source are going to have a community altogether. <br />
            <strong>DCRUST Open-source Developers Community</strong>
          </p>
        </Reveal>

        <div className="flex mb-10">
          <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
            <Button
              isLink
              href={"/#about"}
              className={"mr-3"}
              variant={"primary"}
            >
              Explore Now
            </Button>
          </Reveal>
          <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
            <Button isTarget isLink href={"https://github.com/DCRUSTODC"}>
              Visit Github
            </Button>
          </Reveal>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
            <div>
              <p className="font-bold text-2xl mb-1">5k+</p>
              <p className="opacity-50 ">commits</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
            <div>
              <p className="font-bold text-2xl mb-1">300+</p>
              <p className="opacity-50 ">pull requests</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
            <div>
              <p className="font-bold text-2xl mb-1">600+</p>
              <p className="opacity-50 ">members</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex-1 mt-14 sm:mt-0" style={{ marginTop: "100px" }}>
        <Slide delay={200} triggerOnce>
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              layout="responsive"
              height={"200px"}
              objectFit="contain"
              objectPosition={"center"}
              src={herobg}
              alt="hero"
            />
          </div>
        </Slide>
      </div>
    </Container>
  );
};

export default Hero;
