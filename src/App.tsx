import { ContactProvider } from "@/context/ContactContext";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

export default function App() {
  return (
    <ContactProvider>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ContactModal />
    </ContactProvider>
  );
}
