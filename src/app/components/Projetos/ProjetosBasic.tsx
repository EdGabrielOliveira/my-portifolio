"use client";

import React from "react";

interface ProjetosProps {
  title: string;
  subtitle: string;
  vercel: string;
  github: string;
}

export default function ProjetoBasic({ title, subtitle, vercel, github }: ProjetosProps) {
  return (
    <div
      className="flex flex-col bg-gradient-to-tr to-sky-700 from-sky-950 shadow-lg p-6 pb-8 px-10 text-gray-100
     w-[20rem] h-[14rem] xs:w-[18rem] sm:w-[18rem] md:w-[18rem] items-center justify-center rounded-xl"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl">{title}</h1>
        <h2 className="text-sm xs:text-sm sm:text-md md:text-xs text-center">{subtitle}</h2>
      </div>
      <div className="flex flex-col gap-2 pt-4 px-4 pb-2 w-full justify-between">
        <a
          href={vercel}
          target="_blank"
          className="bg-white text-xs text-center w-[12rem] p-2 px-4 rounded-lg hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer"
        >
          Desmostração no Vercel
        </a>
        <a
          href={github}
          target="_blank"
          className="bg-black text-xs text-center w-[12rem] p-2 px-4 rounded-lg hover:bg-zinc-900 text-white font-semibold cursor-pointer"
        >
          Documentação no GitHub
        </a>
      </div>
    </div>
  );
}
