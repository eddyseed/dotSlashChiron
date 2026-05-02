import Navbar from "@/comps/navbar";
import './globals.css'
import Hero from "@/comps/hero";
import ProjectsGallery from "@/comps/gallery";
import TechStack from "@/comps/techstack";
import Footer from "@/comps/footer";
import Certificates from "@/comps/certificates";
import Contact from "@/comps/contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProjectsGallery/>
      <TechStack/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}
