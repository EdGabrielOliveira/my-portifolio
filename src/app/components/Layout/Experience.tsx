import React from "react";
import InputRange from "../Inputs/InputRange";

export default function Experience() {
  return (
    <div className="flex flex-col w-[24rem]">
      <ul className="flex justify-between gap-12">
        <div className="">
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
        <div>
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
