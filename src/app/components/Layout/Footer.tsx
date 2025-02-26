import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center md:pt-10 sm:pb-4">
      <p>Created by Gabriel Oliveira</p>
      <p className="text-xs">TypeScript, Tailwind CSS e Next.js</p>
      <a
        href="https://drive.google.com/file/d/1SY6NzyFi5MawCR1alkYCMe3Dpc0wGHFG/view?usp=sharing"
        target="_blank"
        className="mt-4 mb-4 p-2 px-6 bg-gradient-to-tr to-sky-700 from-sky-900 rounded-xl cursor-pointer hover:scale-95 hover:duration-200 transition-all"
      >
        Baixe o currículo digital
      </a>
    </div>
  );
}
