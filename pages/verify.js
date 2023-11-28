import { Footer, Navbar } from "@/components";
import React from "react";
import Verification from "@/components/Verification";

const Verify = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <Verification />
      <Footer />
    </div>
  );
};

export default Verify;
