import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Objectives from "./components/Objectives";
import CriteriaTheme from "./components/CriteriaTheme";
import ClientRegistrationForm from "./components/ClientRegistrationForm";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Objectives />
        <CriteriaTheme />
        <ClientRegistrationForm />
      </main>

      <Footer />
    </>
  );
}
