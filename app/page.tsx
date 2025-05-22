// Components
import About from "@/components/about";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
