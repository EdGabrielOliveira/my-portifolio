import SocialAncor from "./components/Social/SocialAncor";
import Contact from "./components/Perfil/Contact/Contact";
import Perfil from "./components/Perfil/Perfil";
import Experience from "./components/Layout/Experience";
import Biography from "./components/Social/Biography";
import Personally from "./components/Social/Personally";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="w-full text-white font-Poppins">
      <div className="flex justify-center items-center text-center pt-[5rem]">
        <div className=" flex justify-center items-center text-center">
          <Perfil />
        </div>
        <Contact />
        <SocialAncor />
      </div>
      <div className="flex gap-10 m-auto mt-[3rem] w-[60rem]">
        <Experience />
        <Biography />
      </div>
      <div className="flex gap-10 m-auto mt-[3rem] w-[60rem] pt-[1rem]">
        <Personally />
      </div>
      <footer className="pt-[1.5rem]">
        <Footer />
      </footer>
    </div>
  );
}
