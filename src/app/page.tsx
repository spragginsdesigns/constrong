import { Header, Footer } from "@/components/layout";
import { Hero, Services, About, VideoShowcase, Projects, Careers, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <VideoShowcase />
        <Projects />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
