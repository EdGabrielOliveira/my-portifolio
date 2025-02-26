"use client";
import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";

interface ProjetosProps {
  title: string;
  subtitle: string;
  description: string;
  vercel: string;
  github: string;
  images: StaticImageData[];
}

export default function Projetos({ title, subtitle, description, vercel, github, images }: ProjetosProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col bg-gradient-to-tr to-sky-700 from-sky-950 shadow-lg p-6 pb-8 px-10 text-gray-100 w-[20rem] xs:w-[24rem] sm:w-[30rem] md:w-[40rem] items-center justify-center rounded-xl">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className="text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">{title}</h1>
        <h2 className="text-sm xs:text-sm sm:text-md text-center">{subtitle}</h2>
      </div>
      <p className="flex w-[40rem] xs:w-[20rem] sm:w-[26rem] md:w-[34rem] justify-center items-center self-center text-center pt-4 pb-2 text-sm xs:text-sm sm:text-md sm:text-base">
        {description}
      </p>
      <div className="flex gap-4 pt-4 pb-2 flex-row xs:flex-col md:flex-row">
        <a
          href={vercel}
          target="_blank"
          className="bg-white p-2 px-4 rounded-lg hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer"
        >
          Desmostração no Vercel
        </a>
        <a
          href={vercel}
          target="_blank"
          className="bg-black p-2 px-4 rounded-lg hover:bg-zinc-900 text-white font-semibold cursor-pointer"
        >
          Documentação no GitHub
        </a>
      </div>
      <div className="w-full justify-center items-center self-center">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="p-4 ">
              <div className="flex justify-center items-center w-full">
                <Image
                  src={image}
                  alt={`Foto carrocel ${index + 1}`}
                  layout="responsive"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
