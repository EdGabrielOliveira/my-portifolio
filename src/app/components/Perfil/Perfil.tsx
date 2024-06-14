"use client";

import React from "react";
import Image from "next/image";
import Avatar1 from "../../assets/avatar-1.jpg";

export default function Perfil() {
  return (
    <div className="m-[0rem] p-[0rem] pb-5">
      <section className="flex justify-center items-center md:flex-row md:pr-[2rem] sm:flex sm:flex-col sm:justify-center">
        <Image
          src={Avatar1}
          alt="Avatar"
          className="sm:flex sm:w-[5rem] sm:h-[5rem] md:flex md:w-[10rem] md:h-[10rem] rounded-full border-emerald-600 border-[0.3rem]"
        />
        <div className="md:pl-[2rem] flex flex-col sm:flex-col sm:text-xs">
          <h3 className="text-xl font-semibold">Gabriel Oliveira</h3>
          <p className="text-sm font-light"> Developer Front-End</p>
        </div>
      </section>
    </div>
  );
}
