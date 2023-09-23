import useWindowSize from "@/hooks/useWindowSize;";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Logo } from ".";
import { Fade } from "react-awesome-reveal";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const refMenu = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (refMenu.current) {
        if (refMenu.current.contains(e.target)) {
          return;
        }
      }
      closeMenu();
    };
    document.addEventListener("onClick", handleClick);
    return () => {
      document.removeEventListener("onClick", handleClick);
    };
  }, []);

  return (
    <div className="py-4 relative" onDoubleClick={closeMenu}>
      <Container className={"flex justify-between items-center"}>
        <Logo />
        <div className="hidden sm:block">
          <ContentSidebar toggleMenu={toggleMenu} />
        </div>
        <div className="block sm:hidden cursor-pointer" style={{zIndex:"1000"}}>
        <Image
            onClick={toggleMenu}
            src={menu ? "/icons/close.svg" : "/icons/menu.svg"}
            alt="menu"
            width={30}
            height={30}
          />
        </div>
        {menu && width < 640 && (
          <Fade
            duration={300}
            delay={100}
            className="rounded-b-3xl absolute py-20 top-0 flex justify-center items-center  left-0 right-0 bg-[#000000E6] z-20"
          >
            <div ref={refMenu}>
              <ContentSidebar toggleMenu={toggleMenu} />
            </div>
          </Fade>
        )}
      </Container>
    </div>
  );
};

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className="items-center flex-col sm:flex-row flex">
      <div className="block sm:hidden lg:block"></div>
      <Link href="/#about">
        <a
          onClick={toggleMenu}
          className="mb-3 sm:mb-0 mt-4 sm:mt-0 ml-0 sm:ml-7"
        >
          About
        </a>
      </Link>
      <Link href="/#team">
        <a onClick={toggleMenu} className="mb-3 sm:mb-0 ml-0 sm:ml-7">
          Team
        </a>
      </Link>
      <Link href="/#faq">
        <a
          onClick={toggleMenu}
          className="mb-3 sm:mb-0 ml-0 sm:ml-7 mr-0 sm:mr-7"
        >
          FAQ
        </a>
      </Link>
      <div style={{display:"flex", gap:"1rem"}}>
      <Button
        isTarget
        isLink
        href={"https://www.linkedin.com/company/dcrustodc"}
        variant={"outline-primary"}
        >
        LinkedIn
      </Button>
      <Button
        isTarget
        isLink
        href={"https://discord.gg/ttYFsAwKhY"}
        variant={"outline-primary"}
        >
        Join Discord
      </Button>
      </div>
    </div>
  );
};

export default Navbar;
