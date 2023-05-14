import React from "react";

const Logo = () => {
    return (
        <a href="/">
            <div
                className="font-bold flex text-2xl"
                style={{ cursor: "pointer" }}
            >
                <p>DCRUST</p>
                <p className="text-[#000]">ODC</p>
            </div>
        </a>
    );
};

export default Logo;
