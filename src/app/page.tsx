import { Header, Footer } from "@/components/layout";
import { Hero, Services, About, Projects, Careers, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
