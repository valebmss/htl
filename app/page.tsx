
import Hero from "@/components/Hero";
import EnergyProjectSection from "@/components/EnergyProyectSection";
import Servicio from "@/components/ServiciosSection";
import ContadorProyectos from "@/components/ContadorProyectos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <EnergyProjectSection/>
      <Servicio/>
      <ContadorProyectos/>
      <Footer/>
     
    </div>
  );
}
