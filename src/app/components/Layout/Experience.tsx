import React from "react";
import InputRange from "../Inputs/InputRange";

export default function Experience() {
  return (
    <div className="flex xl:flex-col xl:w-[24rem] md:grid">
      <ul
        className="flex xl:flex-row xl:flex md:flex xl:justify-between xl:gap-12 md:justify-center 
      md:items-center sm:gap-12 md:flex-col
      "
      >
        <div className="xl:flex xl:flex-col md:flex md:gap-4 xl:gap-0 sm:gap-0">
          <li className="ranger-align">
            <p>JavaScript</p>
            <InputRange target={50} />
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
            <p>TailWind</p>
            <InputRange target={90} />
          </li>
        </div>
        <div className="xl:flex xl:flex-col md:flex md:gap-4 xl:gap-0 sm:gap-0">
          <li className="ranger-align">
            <p>HTML</p>
            <InputRange target={100} />
          </li>
          <li className="ranger-align">
            <p>CSS</p>
            <InputRange target={100} />
          </li>
          <li className="ranger-align">
            <p>Angular</p>
            <InputRange target={10} />
          </li>
          <li className="ranger-align">
            <p>Java</p>
            <InputRange target={40} />
          </li>
        </div>
      </ul>
    </div>
  );
}
