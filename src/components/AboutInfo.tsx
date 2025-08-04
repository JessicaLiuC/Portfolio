`use client`

import React from 'react';

export default function AboutInfo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-[18%] mt-60 mb-60">
        <h1 className="lg:text-[32pt] text-md montserrat-semibold text-center text-gray-800 mb-12">A bit about who I am</h1>
        <p className="lg:text-[24pt] text-md montserrat-alternates-regular text-left text-gray-600 mb-12">
        I'm a UX designer and frontend developer passionate about building intuitive,
        joyful digital experiences. With a background in HCI and CS, I bridge creativity 
        and logic to bring ideas to life through thoughtful, data-driven design.
        </p>
        <p className="lg:text-[24pt] text-md montserrat-alternates-regular text-left text-gray-600">
        Currently pursuing my Master’s in HCI at the University of Maryland, where I explore the intersection of design,
            technology, and human behavior.
        </p>
        <div className="flex flex-row items-center justify-between mt-30 gap-12 w-full object-contain">
            <img src="/image/about_icon1.svg" alt="about-icon1" className="w-1/2 h-[750px]"/>
            <img src="/image/about_icon2.svg" alt="about-icon2" className="w-1/2 h-[750px]"/>
        </div>
    </div>
  );
};