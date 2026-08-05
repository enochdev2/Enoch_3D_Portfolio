import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";
import Services from "../sections/services/Services";
import Skills from "../sections/skills/Skills";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}