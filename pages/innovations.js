import { Footer, Navbar } from "@/components";
import React from "react";
import Innovations from "@/components/Innovations";

const Home = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <Innovations />
      <Footer />
    </div>
  );
};

export default Home;
