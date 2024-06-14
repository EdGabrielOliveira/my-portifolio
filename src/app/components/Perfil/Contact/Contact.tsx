import React from "react";
import Image from "next/image";
import Rn from "../../../assets/rn.svg";

export default function Contact() {
  return (
    <div className="flex justify-center items-center">
      <span className="hidden md:flex border-r-2 border-[#fff]/35 md:h-[6rem] justify-center items-center"></span>
      <div className="flex flex-col md:flex sm:flex md:text-start sm:text-center md:pl-[2rem]">
        <ul className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col sm:text-center">
          <li className="flex gap-2 d:justify-start md:items-center sm:justify-center sm:items-center">
            <p className="font-semibold">Número:</p> (84) 99963-7821
          </li>
          <li className="flex gap-2 d:justify-start md:items-center sm:justify-center sm:items-center">
            <p className="font-semibold">E-mail:</p> edgabrieloliveira@proton.me
          </li>
          <li className="flex gap-2 md:justify-start md:items-center sm:justify-center sm:items-center">
            <div className="md:w-[1.5rem] sm:w-[1.2rem]">
              <Image src={Rn} alt="bandeira" />
            </div>
            <p>Rio Grande do Norte - Brasil</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
