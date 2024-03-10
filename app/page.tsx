import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-600/30">
      <div className="w-3/4 min-h-screen">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
