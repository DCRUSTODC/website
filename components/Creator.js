import Image from "next/image";
import React from "react";
import { Button } from ".";

const Creator = ({ data }) => {
    const { image, username, dis, github, linkedin, post } = data;
    return (
        <div style={{minHeight:"100%"}} className="hover:bg-[#ffffff66] transition duration-300 ease-in-out bg-[#ffffff1a] overflow-hidden rounded-lg shadow-lg">
            <div className="rounded-lg overflow-hidden mb-3 relative h-[200px] w-full"></div>
            <div className="pb-8 pl-8 pr-8 flex flex-col justify-center items-center mt-[-160px]">
                <div className="w-[100px] relative z-10 h-[100px] mb-3">
                    <Image
                        width={100}
                        height={100}
                        src={image}
                        className="object-cover object-center w-full h-full"
                        alt={username}
                    />
                </div>
                <p className="font-bold text-xl text-center">{username}</p>
                <p className="opacity-50 text-center text-sm mb-5">{post}</p>
                <p className="opacity-50 text-center text-sm mb-5">{dis}</p>
                <div
                    style={{ width:"100%", display: "flex", justifyContent: "space-evenly" }}
                >
                    <Button isTarget isLink href={github}>
                        Github
                    </Button>
                    <Button isTarget isLink href={linkedin}>
                        Linkedin
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Creator;
