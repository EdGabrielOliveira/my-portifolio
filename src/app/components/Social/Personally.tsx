"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { title: "Aprendizado Autodidata", description: "Tenho uma paixão por aprender e estou constantemente evoluindo." },
  { title: "Trabalho em Equipe", description: "Sou um jogador de equipe eficaz e posso colaborar com colegas." },
  { title: "Comunicação", description: "Boa capacidade de comunicação, tanto oral quanto escrita." },
  {
    title: "Resolução de Problemas",
    description: "Habilidade em identificar problemas e encontrar soluções eficazes.",
  },
  { title: "Adaptabilidade", description: "Sou capaz de me adaptar rapidamente a novas tecnologias e metodologias." },
  { title: "Proatividade", description: "Tomo a iniciativa para resolver problemas e melhorar processos." },
];

export default function Personally() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full ">
      <p className="text-2xl underline underline-offset-2 decoration-sky-600">Competências Comportamentais</p>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="p-4">
            <div className="bg-gradient-to-tr to-sky-700 from-sky-950 shadow-lg rounded-lg p-6 h-[9rem] w-[18rem] items-center justify-center flex-col">
              <p className="font-bold pb-2">{skill.title}</p>
              <p className="font-light text-balance text-sm text-gray-300">{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
