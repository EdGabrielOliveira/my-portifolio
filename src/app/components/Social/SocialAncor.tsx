import React from "react";

export default function Button() {
  return (
    <div className="flex pl-[4rem] text-black">
      <div className="flex flex-col justify-center items-start">
        <ul className="flex flex-col p-0 m-0 pl-12 gap-2 justify-end items-end">
          <li className="btn-social w-40">
            <a href="https://github.com/EdGabrielOliveira" target="_blank">
              Github
            </a>
          </li>
          <li className="btn-social w-40">
            <a href="https://www.linkedin.com/in/edgabrieloliveira/" target="_blank">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
