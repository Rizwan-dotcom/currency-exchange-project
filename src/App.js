import { useState } from "react";
import { HeroSection } from "./component/hero-section";
import { Navbar } from "./component/navbar";
import { Sidebar } from "./component/sidebar";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <div>
      <Sidebar isOpen={isOpen} />
      <section className="lg:ml-[260px]">
        <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <HeroSection />
      </section>
    </div>
  );
}

export default App;
