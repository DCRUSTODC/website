import { Footer, Navbar } from "@/components";
import React from "react";
import LeaderboardX from "@/components/LeaderboardX";

const Standings = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <LeaderboardX />
      <Footer />
    </div>
  );
};

export default Standings;
