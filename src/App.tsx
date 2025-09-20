import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Statistics } from "./components/Statistics";
import { Testimonials } from "./components/Testimonials";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";

export default function App() {
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