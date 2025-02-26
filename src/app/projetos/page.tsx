"use client";

import React from "react";
import Projetos from "../components/Projetos/Projetos";

// ClimaTrack
import ClimaTrack1 from "../assets/projetos/climatrack.png";
import ClimaTrack2 from "../assets/projetos/climatrack2.png";
import ClimaTrack3 from "../assets/projetos/climatrack3.png";

// MarketMates
import MarketMates1 from "../assets/projetos/marketmates (1).png";
import MarketMates2 from "../assets/projetos/marketmates (2).png";
import MarketMates3 from "../assets/projetos/marketmates (3).png";
import MarketMates5 from "../assets/projetos/marketmates (5).png";
import MarketMates6 from "../assets/projetos/marketmates (6).png";
import MarketMates7 from "../assets/projetos/marketmates (7).png";

// SafeLink
import SafeLink1 from "../assets/projetos/safelinkv.png";
import SafeLink2 from "../assets/projetos/safelinkm.png";

// LoggiTracker
import Loggi from "../assets/projetos/loggi.png";
import Loggi2 from "../assets/projetos/loggi 2.png";

export default function page() {
  return (
    <div className="flex flex-col p-20 pt-10 gap-16 w-full justify-center items-center self-center">
      <div className="flex flex-row gap-10 xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row">
        <Projetos
          title={"ClimaTrack"}
          subtitle={"Monitoramento Inteligente do Clima"}
          description={
            "ClimaTrack é uma plataforma de rastreamento climático que fornece informações meteorológicas precisas e atualizadas. O sistema permite aos usuários acompanhar variações climáticas em tempo real, auxiliando em tomadas de decisão para diferentes atividades, como agricultura, turismo e planejamento urbano. A interface responsiva e intuitiva garante uma experiência acessível para qualquer tipo de usuário. ClimaTrack foi construído com tecnologias modernas para oferecer dados confiáveis e visualizações claras das condições climáticas."
          }
          vercel="https://climatrack-seven.vercel.app/"
          github="https://github.com/EdGabrielOliveira/climatrack"
          images={[ClimaTrack1, ClimaTrack2, ClimaTrack3]}
        />
        <Projetos
          title={"SafeLink"}
          subtitle={"Download Seguro e Independente de Vídeos"}
          description={
            "SafeLink é uma plataforma que permite baixar vídeos do YouTube sem depender de APIs externas, garantindo mais estabilidade e privacidade. Com uma interface intuitiva e responsiva, proporciona uma experiência fluida para qualquer usuário. O foco está na simplicidade e eficiência, tornando o processo de download rápido e seguro. Desenvolvido com tecnologias modernas, o sistema oferece compatibilidade com diversos dispositivos. SafeLink elimina restrições comuns de outras ferramentas, permitindo maior liberdade ao usuário."
          }
          vercel="https://safelink-zeta.vercel.app/"
          github="https://github.com/EdGabrielOliveira/safelink"
          images={[SafeLink1, SafeLink2]}
        />
      </div>
      <div className="flex flex-row gap-10 xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row">
        <Projetos
          title={"MarketMates"}
          subtitle={"Design de Plataforma para Conectar Marcas e Criadores de Conteúdo"}
          description={
            "MarketMates é um layout desenvolvido para uma plataforma UGC que conecta empresas a influenciadores digitais. O design prioriza a experiência do usuário, oferecendo uma interface clara e navegação intuitiva. Empresas podem visualizar campanhas, selecionar criadores e gerenciar colaborações facilmente. O layout segue princípios de acessibilidade e responsividade, garantindo uma experiência fluida em qualquer dispositivo. MarketMates é um projeto pensado para otimizar interações entre marcas e criadores de conteúdo."
          }
          vercel="https://social-media-project-weld.vercel.app/"
          github="https://github.com/EdGabrielOliveira/social-media-project"
          images={[MarketMates2, MarketMates3, MarketMates1, MarketMates5, MarketMates6, MarketMates7]}
        />
        <Projetos
          title={"Loggi Tracker"}
          subtitle={"Design moderno para rastreamento de entregas"}
          description={
            "Loggi Tracker é um layout projetado em um desafio da loggi para criar um sistema de rastreamento de entregas da Loggi. O design foca na usabilidade, proporcionando uma interface intuitiva e de fácil navegação. Usuários podem acompanhar o status das entregas em tempo real com visualizações organizadas. O layout segue princípios de acessibilidade e responsividade, garantindo adaptação a diferentes dispositivos. Criado com um design limpo e profissional, melhora a experiência do usuário ao rastrear pedidos."
          }
          vercel={"https://desafio-loggi.vercel.app/"}
          github={"https://github.com/EdGabrielOliveira/desafio-loggi"}
          images={[Loggi, Loggi2]}
        />
      </div>
    </div>
  );
}
