import React from "react";

export default function Personally() {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-4 justify-center">
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
