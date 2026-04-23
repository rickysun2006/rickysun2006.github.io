import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { Publications } from "@/components/Publications";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <News />
        <Publications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
