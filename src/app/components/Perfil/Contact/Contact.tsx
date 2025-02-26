import React from "react";
import Image from "next/image";
import Rn from "../../../assets/rn.svg";

export default function Contact() {
  return (
    <div className="flex gap-4">
      <span className="xs:hidden sm:hidden md:hidden xl:flex border-r-2 border-[#fff]/35 md:h-[4.6rem] md:justify-center md:items-center"></span>
      <div className="flex flex-col md:text-start sm:text-center xs:text-center">
        <ul className="flex flex-col md:flex-col sm:flex-col sm:text-center">
          <li className="flex gap-2 md:justify-start items-center sm:justify-center xs:justify-center">
            <p className="font-semibold">Telefone:</p> (84) 99963-7821
          </li>
          <li className="flex gap-2 md:justify-start items-center sm:justify-center xs:justify-center">
            <p className="font-semibold">E-mail:</p> edgabrieloliveira@proton.me
          </li>
          <li className="flex gap-2 md:justify-start items-center sm:justify-center xs:justify-center">
            <div className="md:w-[1.5rem] sm:w-[1.2rem] xs:w-[1rem]">
              <Image src={Rn} alt="bandeira" />
            </div>
            <p>Rio Grande do Norte - Brasil</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
