import React from "react";
import InputRange from "../Inputs/InputRange";

export default function Experience() {
  return (
    <div className="flex xl:flex-col xl:w-[24rem] md:grid sm:flex-col xs:flex-col">
      <h1 className="flex text-xl sm:text-xl xs:text-xl justify-center pb-4 underline underline-offset-2 decoration-sky-600">
        Competências Técnicas
      </h1>
      <ul
        className="flex xl:flex-row xl:flex md:flex xl:justify-between xl:gap-12 md:justify-center 
      md:items-center sm:gap-12 md:flex-col xs:gap-8 xs:flex-row"
      >
        <div className="xl:flex xl:flex-col md:flex md:gap-4 xl:gap-0 sm:gap-0">
          <li className="ranger-align">
            <p>JavaScript</p>
            <InputRange target={70} />
          </li>
          <li className="ranger-align">
            <p>TypeScript</p>
            <InputRange target={70} />
          </li>
          <li className="ranger-align">
            <p>React</p>
            <InputRange target={70} />
          </li>
          <li className="ranger-align">
            <p>Tailwind CSS</p>
            <InputRange target={100} />
          </li>
        </div>
        <div className="xl:flex xl:flex-col md:flex md:gap-4 xl:gap-0 sm:gap-0">
          <li className="ranger-align">
            <p>HTML 5</p>
            <InputRange target={100} />
          </li>
          <li className="ranger-align">
            <p>CSS 3</p>
            <InputRange target={100} />
          </li>
          <li className="ranger-align">
            <p>Wordpress</p>
            <InputRange target={60} />
          </li>
          <li className="ranger-align">
            <p>Next.js</p>
            <InputRange target={60} />
          </li>
        </div>
      </ul>
    </div>
  );
}
