import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SnowOverlay from "@/components/SnowOverlay";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <SnowOverlay />
      <Header />
      <MobileCTA />
      <main className="main-content">
        <Hero />
        <About />
        <Packages />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
