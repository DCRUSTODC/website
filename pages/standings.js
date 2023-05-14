import { Footer, Hero, Navbar } from "@/components";
import React from "react";
import LeaderboardX from "@/components/LeaderboardX";
const Home = () => {
    return (
        <div className="h-full main_bg text-white overflow-hidden" id="top">
            <Navbar />
            <LeaderboardX />
            <Footer />
        </div>
    );
};

export default Home;
