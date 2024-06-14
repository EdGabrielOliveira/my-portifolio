import React from "react";

export default function Button() {
  return (
    <div className="flex md:pl-[4rem] text-black pt-4">
      <div className="flex flex-col">
        <ul className="flex flex-col md:flex-col sm:flex sm:flex-row p-0 m-0 md:pl-12 gap-2">
          <li className="btn-social md:w-40 sm:w-24">
            <a href="https://github.com/EdGabrielOliveira" target="_blank">
              Github
            </a>
          </li>
          <li className="btn-social md:w-40 sm:w-24">
            <a href="https://www.linkedin.com/in/edgabrieloliveira/" target="_blank">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
