import React from "react";

export default function Personally() {
  return (
    <div className="flex xl:flex-row sm:flex-col xl:justify-center xl:items-center md:items-center md:justify-center">
      <ul
        className="grid xl:grid-cols-3 gap-4 xl:justify-center 
      sm:grid-cols-1 xl:w-full sm:justify-center sm:items-center
      md:grid md:grid-cols-2 md:justify-center md:items-center"
      >
        <li className="list-hab">
          <p className="font-bold pb-2">Aprendizado Autodidata:</p>
          <p className="font-light text-sm">
            Tenho uma paixão por aprender e estou constantemente{" "}
          </p>
        </li>
        <li className="list-hab">
          <p className="font-bold pb-2">Trabalho em Equipe:</p>{" "}
          <p className="font-light text-sm">
            Sou um jogador de equipe eficaz e posso colaborar com colegas
          </p>
        </li>
        <li className="list-hab">
          <p className="font-bold pb-2">Comunicação:</p>
          <p className="font-light text-sm">
            Boa capacidade de comunicação, tanto oral quanto escrita.
          </p>
        </li>
        <li className="list-hab">
          <p className="font-bold pb-2">Resolução de Problemas:</p>
          <p className="font-light text-sm">
            Habilidade em identificar problemas e encontrar soluções eficazes.
          </p>
        </li>
        <li className="list-hab">
          <p className="font-bold pb-2">Adaptabilidade:</p>
          <p className="font-light text-sm">
            Sou capaz de me adaptar rapidamente a novas tecnologias de trabalho.
          </p>
        </li>
        <li className="list-hab">
          <p className="font-bold pb-2">Proatividade:</p>
          <p className="font-light text-sm">
            Tomo a iniciativa para resolver problemas e melhorar processos.
          </p>
        </li>
      </ul>
    </div>
  );
}
