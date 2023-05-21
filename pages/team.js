import { Footer, Navbar } from "@/components";
import React from "react";
import TeamX from "@/components/TeamX";

const Home = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <TeamX />
      <Footer />
    </div>
  );
};

export default Home;
