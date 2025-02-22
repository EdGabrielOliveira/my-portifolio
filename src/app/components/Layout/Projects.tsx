import React from "react";

export default function Projects() {
  return (
    <div className="flex  items-center gap-4">
      <p>Projetos disponíveis no Vercel</p>
      <ul className="flex gap-8">
        <li>
          <a className="projects-nav">SafeLink</a>
        </li>
        <li>
          <a className="projects-nav">ClimaTrack</a>
        </li>
        <li>
          <a className="projects-nav">Social Media</a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
    </div>
  );
}
