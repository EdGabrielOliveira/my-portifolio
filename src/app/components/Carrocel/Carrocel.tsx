"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjetosBasic from "../Projetos/ProjetosBasic";

export default function CarouselProjects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 920, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-[60rem] flex-col justify-center items-center self-center">
      <div className="flex justify-center">
        <p className="text-2xl underline underline-offset-2 decoration-sky-600">Meus Projetos</p>
      </div>
      <Slider {...settings}>
        <div className="flex justify-center items-center self-center p-4">
          <ProjetosBasic
            title={"ClimaTrack"}
            subtitle={"Monitoramento Inteligente do Clima usando a Api da "}
            vercel="https://climatrack-seven.vercel.app/"
            github="https://github.com/EdGabrielOliveira/climatrack"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <ProjetosBasic
            title={"SafeLink"}
            subtitle={"Download Seguro e Independente de Vídeos"}
            vercel="https://safelink-zeta.vercel.app/"
            github="https://github.com/EdGabrielOliveira/safelink"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <ProjetosBasic
            title={"MarketMates"}
            subtitle={"Layout de uma Plataforma User Generated Content (UGC)"}
            vercel="https://social-media-project-weld.vercel.app/"
            github="https://github.com/EdGabrielOliveira/social-media-project"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <ProjetosBasic
            title={"Loggi Tracker"}
            subtitle={"Layout moderno para rastreamento de entregas"}
            vercel="https://desafio-loggi.vercel.app/"
            github="https://github.com/EdGabrielOliveira/desafio-loggi"
          />
        </div>
      </Slider>
      <div className="flex justify-center ">
        <a
          href="/projetos/"
          className="bg-white text-base text-center p-2 px-4 rounded-lg hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer"
        >
          Veja mais detalhado aqui!
        </a>
      </div>
    </div>
  );
}
