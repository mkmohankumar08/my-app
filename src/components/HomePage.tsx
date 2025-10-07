import React from 'react'
import { useState } from "react";

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Footer from './Footer';
import MissionVisionPage from './VisionMission';
import RoadmapPage from './Roadmap';

const HomePage = () => {

  return (
    <div className=''>
        {/* Navbar */}
       <Navbar />
       <HeroSection/>
       <AboutUs />
       <MissionVisionPage />
       {/* <RoadmapPage /> */}
       <Footer />

    </div>
  )
}

export default HomePage