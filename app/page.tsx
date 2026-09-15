import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
    </main>
  );
}