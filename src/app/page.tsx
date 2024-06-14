import SocialAncor from "./components/Social/SocialAncor";
import Contact from "./components/Perfil/Contact/Contact";
import Perfil from "./components/Perfil/Perfil";
import Experience from "./components/Layout/Experience";
import Biography from "./components/Social/Biography";
import Personally from "./components/Social/Personally";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="flex-col min-w-360 w-full max-w-full overflow-x-hidden text-white container mx-auto font-Poppins ">
      <div className="flex md:flex md:flex-row md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center md:pt-[5rem] sm:pt-[2rem]">
        <div className="flex justify-center items-center text-center">
          <Perfil />
        </div>
        <Contact />
        <div className="flex">
          <SocialAncor />
        </div>
      </div>
      <div
        className="flex md:flex-row sm:flex-col gap-10 m-auto mt-[3rem] sm:mt-[1rem] md:w-[60rem]
       sm:items-center sm:justify-center"
      >
        <div className="md:flex sm:hidden flex">
          <Experience />
        </div>
        <div className="flex sm:flex">
          <Biography />
        </div>
        <div className="sm:flex md:hidden flex md:w-full sm:w-0 justify-center ">
          <Experience />
        </div>
      </div>
      <div className="flex md:flex gap-10 m-auto mt-[3rem] sm:mt-[1rem] pt-[1rem] md:w-[60rem] sm:w-[23rem] md:justify-center md:items-center text-center">
        <Personally />
      </div>
      <footer className="pt-[1.5rem]">
        <Footer />
      </footer>
    </div>
  );
}
