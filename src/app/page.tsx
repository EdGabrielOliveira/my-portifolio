"use client";

import SocialAncor from "./components/Social/SocialAncor";
import Contact from "./components/Perfil/Contact/Contact";
import Perfil from "./components/Perfil/Perfil";
import Experience from "./components/Layout/Experience";
import Biography from "./components/Social/Biography";
import Personally from "./components/Social/Personally";
import PersonallyFlex from "./components/Social/PersonallyFlex";
import Footer from "./components/Layout/Footer";
import CarouselProjects from "./components/Carrocel/Carrocel";
import CarouselFlex from "./components/Carrocel/CarrocelFlex";

export default function Home() {
  return (
    <div className="h-screen flex-col pt-10 min-w-360 w-full max-w-full overflow-x-hidden text-white container mx-auto font-Poppins ">
      <div
        className="flex items-center flex-col xl:flex xl:flex-row xl:justify-center 
       sm:flex-col sm:justify-center"
      >
        <div className="flex md:pt-0 xs:pt-10 justify-center items-center text-center">
          <Perfil />
        </div>
        <div
          className="flex xs:flex-col xs:items-center xs:justify-center md:gap-4 sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-2
        md:flex md:flex-row xs:item-center xs:gap-2"
        >
          <Contact />
          <SocialAncor />
        </div>
      </div>
      <div
        className="flex xs:flex-col items-center xl:flex-row sm:flex-col gap-10 m-auto mt-[3rem] sm:mt-[1rem] xl:w-[60rem]
       sm:items-center sm:justify-center"
      >
        <div className="xl:flex hidden">
          <Experience />
        </div>
        <div className="flex sm:flex">
          <Biography />
        </div>
        <div className="flex xl:hidden xl:w-full sm:w-0 justify-center">
          <Experience />
        </div>
      </div>
      <div className="flex md:mt-12 md:mb-10 xl:flex gap-10 m-auto mt-[3rem] sm:mt-[1rem] pt-[1rem] xl:w-[60rem] md:w-[60rem] sm:w-[20rem] xs:w-[20rem] xl:justify-center xl:items-center text-center">
        <div className="hidden md:flex w-full">
          <Personally />
        </div>
        <div className="flex md:hidden w-full">
          <PersonallyFlex />
        </div>
      </div>
      <div className="w-full flex justify-center items-center self-center mt-10">
        <div className="hidden md:flex">
          <CarouselProjects />
        </div>
        <div className="flex md:hidden">
          <CarouselFlex />
        </div>
      </div>
      <div className="pt-[1.5rem]">
        <Footer />
      </div>
    </div>
  );
}
