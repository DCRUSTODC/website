import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft } from "@/keyframes";
import Image from "next/image";
import dcrust from "../assets/dcrust.jpg";
const AboutUs = () => {
  return (
    <Container className={"mb-44 scroll-mt-10"} id="about">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">About Us</h2>
      </div>
      <div className="flex items-center">
        <div className="w-[44%] hidden sm:block">
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div
              className="relative w-full h-[500px] rounded-xl overflow-hidden"
              style={{ opacity: "0.8" }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                src={dcrust}
                alt="dcrust"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex-1 ml-0 sm:ml-10 lg:ml-20">
          <h3 className="font-bold text-xl mb-3">DCRUST - The beginning</h3>
          <p className="mb-3 opacity-50">
            Deenbandhu Chhotu Ram University of Science and Technology, or a
            fancier term, DCRUST, is a state-government university in Sonipat,
            Haryana, India. DCRUST was established a technical institution in
            1986, before its upgradation to a university.{" "}
          </p>
          <p className="mb-3 opacity-50">
            The idea of getting the students of DCRUST start with open source
            came from the fact that not even a single student from the
            university has qualified for GSoC, ever.{" "}
          </p>
          <p className="mb-3 opacity-50">
            GSoC being the world's largest and most competitive open source
            agenda, interests everyone amongst the developers' community, and
            the students of DCRUST lacking behind is not a favourable sight.{" "}
          </p>
          <p className="lg:block mb-3 opacity-50">
            And hence, a group student developers decided to create an identity
            for their university, a place for the students and by the students
            of DCRUST. Started by{" "}
            <a href="https://linkedin.com/in/sambhavsaxena" target={"_blank"}>
              Sambhav Saxena
            </a>{" "}
            along with 9 other colleagues in March 2023, the community plans to
            introduce students unaware of the open source projects, either from
            technical or non-technical ways to participate into open source
            events, international hackathons, contribution bootcamps, and most
            importantly, GSoC.{" "}
          </p>
          <p className="mb-3 opacity-50">
            Currently, the community has over 1000 members, and there's yet a
            lot to do, slow and steady.{" "}
          </p>
          <Reveal
            delay={200}
            duration={1000}
            keyframes={fadeInDownShorter2}
            style={{
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant={"btn_primary_outline"}
              isTarget
              isLink
              href={"https://dcrust.edu.in/"}
            >
              More about DCRUST
            </Button>
          </Reveal>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
