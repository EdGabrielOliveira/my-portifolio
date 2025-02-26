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

export default function PersonallyFlex() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <p className="text-2xl sm:text-xl xs:text-xl underline underline-offset-2 decoration-sky-600">
        Competências Comportamentais
      </p>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="p-4 px-10 flex flex-row">
            <div className="bg-gradient-to-tr to-sky-700 from-sky-950 shadow-lg rounded-lg p-6 h-[9rem] w-[16rem] items-center justify-center">
              <p className="font-bold pb-2">{skill.title}</p>
              <p className="font-light text-balance text-sm text-gray-300">{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
