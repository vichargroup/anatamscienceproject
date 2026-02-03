import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Objectives from "./components/Objectives";
import CriteriaTheme from "./components/CriteriaTheme";
import ClientRegistrationForm from "./components/ClientRegistrationForm";
import Footer from "./components/Footer";
import ThemeSection from "./components/ThemeSection";


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Objectives />
        <CriteriaTheme />
        <ThemeSection />
        <ClientRegistrationForm />
      </main>

      <Footer />
    </>
  );
}
