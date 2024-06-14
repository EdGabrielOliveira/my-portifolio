"use client";

import React from "react";
import Image from "next/image";
import Avatar1 from "../../assets/avatar-1.jpg";

export default function Perfil() {
  return (
    <div className="m-[0rem] p-[0rem]">
      <section className="flex justify-center items-center pr-[2rem]">
        <Image
          src={Avatar1}
          alt="Avatar"
          className="w-[10rem] h-[10rem] rounded-full border-emerald-600 border-[0.3rem] "
        />
        <div className="pl-[2rem] ">
          <h3 className="text-xl font-semibold">Gabriel Oliveira</h3>
          <p className="text-sm font-light"> Developer Front-End</p>
        </div>
      </section>
    </div>
  );
}
