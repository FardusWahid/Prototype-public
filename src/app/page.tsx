import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingSectionCards from "@/components/Pricing";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="absolute inset-0 z-0 h-dvh
      bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
      dark:bg-[radial-gradient(#333_1px,transparent_1px)] 
      [background-size:16px_16px] 
      md:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] 
      pointer-events-none"
      ></div>
      <section id="home" className="pt-[60px] relative">
        <Hero />
      </section>
      <Feature />
      <PricingSectionCards />
      <About />
      <Footer />
    </div>
  );
}
