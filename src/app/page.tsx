import SocialAncor from "./components/Social/SocialAncor";
import Contact from "./components/Perfil/Contact/Contact";
import Perfil from "./components/Perfil/Perfil";
import Experience from "./components/Layout/Experience";
import Biography from "./components/Social/Biography";
import Personally from "./components/Social/Personally";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="h-screen flex-col min-w-360 w-full max-w-full overflow-x-hidden text-white container mx-auto font-Poppins ">
      <div
        className="flex xl:flex xl:flex-row xl:justify-center xl:items-center
       sm:flex-col sm:justify-center sm:items-center xl:pt-[5rem] sm:pt-[2rem]
       md:
       "
      >
        <div className="flex justify-center items-center text-center">
          <Perfil />
        </div>
        <div
          className="flex md:gap-4 sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-2
        md:flex md:flex-row"
        >
          <Contact />
          <SocialAncor />
        </div>
      </div>
      <div
        className="flex xl:flex-row sm:flex-col gap-10 m-auto mt-[3rem] sm:mt-[1rem] xl:w-[60rem]
       sm:items-center sm:justify-center"
      >
        <div className="xl:flex sm:hidden flex md:hidden">
          <Experience />
        </div>
        <div className="flex sm:flex">
          <Biography />
        </div>
        <div className="sm:flex xl:hidden flex xl:w-full sm:w-0 justify-center md:flex">
          <Experience />
        </div>
      </div>
      <div className="flex xl:flex gap-10 m-auto mt-[3rem] sm:mt-[1rem] pt-[1rem] xl:w-[60rem] md:w-[36rem] sm:w-[23rem] xl:justify-center xl:items-center text-center">
        <Personally />
      </div>
      <footer className="pt-[1.5rem]">
        <Footer />
      </footer>
    </div>
  );
}
