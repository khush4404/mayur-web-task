import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Statistics } from "./components/Statistics";
import { Testimonials } from "./components/Testimonials";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quart',
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="pt-24">
        <About />
        <Services />
        <Statistics />
        <Testimonials />
        <Brands />
        <Footer />
      </div>
    </div>
  );
}