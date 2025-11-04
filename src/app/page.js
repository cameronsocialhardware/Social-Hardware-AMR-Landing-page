import Advantages from "@/components/Advantages";
import AdvantagesV1 from "@/components/AdvantagesV1";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Customize from "@/components/Customize";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import Image from "next/image";
import CompanyProfile from "@/components/CompanyProfile";
import PrabalModules from "@/components/PrabalModules";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="mt-24 w-full bg-white gap-16 md:gap-24 flex flex-col">
      <Navbar />
      <Hero />
      <Products />
      <Customize />
      {/* <PrabalModules /> */}
      <Contact />
      <Advantages />
      {/* <AdvantagesV1 /> */}
      <CompanyProfile />
      <Gallery />
      <Footer />
    </main>
  );
}
