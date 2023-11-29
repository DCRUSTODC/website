import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container, Logo } from ".";

const Footer = () => {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const ig = () => {
    window.location.href = "https://instagram.com/dcrustodc";
  };
  const discord = () => {
    window.location.href = "https://discord.gg/ttYFsAwKhY";
  };
  const git = () => {
    window.location.href = "https://github.com/DCRUSTODC";
  };
  return (
    <Container className={"pb-10"}>
      <div className="flex flex-col lg:flex-row mb-16">
        <div className="w-[300px] mb-10 lg:mb-0 mr-10 lg:mr-28">
          <Logo />
          <p className="mt-5">
            An open-source platform by the students of DCRUST for welfare of the
            open-source community. <br /> <br />
            We thrive for PRs.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="font-bold text-xl mb-5">About</p>
            <div className="flex flex-col">
              <Link href="/team#head">
                <a className="mb-4 opacity-50">Our Team</a>
              </Link>
              <Link href="https://docs.google.com/document/d/1W3NY4c8LYlDCMZtmQvVNlxSR20xvpybCfZfSRwEprjY/edit?usp=sharing">
                <a className="mb-4 opacity-50" target={"_blank"}>
                  Resources
                </a>
              </Link>
              <Link href="/#faq">
                <a className="mb-4 opacity-50">FAQ</a>
              </Link>
              <Link href="/verify">
                <a className="mb-5 opacity-50">Verify certificates</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-xl mb-5">Happenings</p>
            <div className="flex flex-col">
              <Link href="/events">
                <a className="mb-4 opacity-50">Events</a>
              </Link>
              <Link href="/innovations">
                <a className="mb-4 opacity-50">Innovations</a>
              </Link>
              <Link href="https://github.com/DCRUSTODC">
                <a className="mb-4 opacity-50" target={"_blank"}>
                  Open source
                </a>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-xl mb-5">Contact</p>
            <div className="flex flex-col">
              <Link href="mailto:dcrustodc@gmail.com">
                <a className="mb-5 opacity-50">dcrustodc@gmail.com</a>
              </Link>
              <div className="flex items-center">
                <div className="mr-10 cursor-pointer">
                  <Image
                    src="/icons/discord.svg"
                    width={34}
                    height={34}
                    alt="discord"
                    onClick={discord}
                  />
                </div>
                <div className="mr-10 cursor-pointer">
                  <Image
                    src="/icons/instagram.svg"
                    width={28}
                    height={28}
                    alt="instagram"
                    onClick={ig}
                  ></Image>
                </div>
                <div className="cursor-pointer">
                  <Image
                    src="/icons/github.svg"
                    width={30}
                    height={30}
                    alt="youtube"
                    onClick={git}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        Love, Sambhav Saxena
      </div>
      <div
        onClick={scrollToTop}
        className="animate-bounce  h-14 w-14 cursor-pointer shadow-lg shadow-[#671AE4]/40 rounded-full bg-gradient-to-b font-bold from-[#B75CFF] to-[#671AE4] mx-auto flex justify-center items-center"
      >
        UP
      </div>
    </Container>
  );
};

export default Footer;
