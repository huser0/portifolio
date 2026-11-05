import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page" id="inicio">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Expertise />
      <Closing />
      <Footer />
    </main>
  );
}
