import React from "react";
import Image from "next/image";
import Rn from "../../../assets/rn.svg";

export default function Contact() {
  return (
    <div className="flex justify-center items-center">
      <span className="border-r-2 border-[#fff]/35 h-[6rem] justify-center items-center text-center"></span>
      <div className="flex flex-col text-start pl-[2rem]">
        <ul className="flex flex-col">
          <li className="flex gap-2">
            <p className="font-semibold">Número:</p> (84) 99963-7821
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">E-mail:</p> edgabrieloliveira@proton.me
          </li>
          <li className="flex gap-2 justify-start items-center">
            <div className="w-[1.5rem]">
              <Image src={Rn} alt="bandeira" />
            </div>
            <p>Rio Grande do Norte - Brasil</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
