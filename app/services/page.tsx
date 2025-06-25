// "use client"
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import ClientOnlyServicesTabs from "@/components/ClientOnlyServicesTabs"; // Import the client-only wrapper

const Services = () => {
  return (
    <div>
      <Topnav />
      <Navbar2 />
      <ClientOnlyServicesTabs /> 
      <Footer2 />
      {/* <BottomFooter /> */}
    </div>
  );
};

export default Services;
