import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/infoSection";
import { homeObjOne } from "../components/infoSection/Data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleHamburger={toggleHamburger} />
      <Navbar toggleHamburger={toggleHamburger} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
}
