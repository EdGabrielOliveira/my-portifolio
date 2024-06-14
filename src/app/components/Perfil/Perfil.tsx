"use client";

import React from "react";
import Image from "next/image";
import Avatar1 from "../../assets/avatar-1.jpg";

export default function Perfil() {
  return (
    <div className="m-[0rem] p-[0rem] pb-5">
      <section
        className="flex md:flex xl:justify-center xl:items-center md:flex-col xl:pr-[2rem]
       sm:flex sm:flex-col sm:items-center sm:justify-center md:justify-center md:items-center md:gap-3 xl:flex-row"
      >
        <Image
          src={Avatar1}
          alt="Avatar"
          className="sm:flex sm:w-[5rem] sm:h-[5rem] 
                      md:flex md:w-[7.5rem] md:h-[7.5rem]
                      xl:flex xl:w-[10rem] xl:h-[10rem] 
                    rounded-full border-emerald-600 border-[0.3rem]"
        />
        <div className="xl:pl-[2rem] flex flex-col sm:flex-col sm:text-xs">
          <h3 className="text-xl font-semibold">Gabriel Oliveira</h3>
          <p className="text-sm font-light">Developer Front-End</p>
          <span className="sm:hidden xl:hidden md:flex md:border-b-gray-500/55 md:border-b-[0.2rem] md:pt-5 md:w-[15rem]"></span>
        </div>
      </section>
    </div>
  );
}
