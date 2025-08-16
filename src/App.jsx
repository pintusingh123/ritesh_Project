import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
// import ChartSection from './components/ChartSection';
import Footer from "./components/Footer";
// import LiveChart from './components/LiveChart';
import About from "./components/About";
// import Link_sec from
import Link from "./components/Link";
import Info from "./components/Infor";

function App() {
  return (
    <div className=" bg-gradient-to-r from-gray-700 to-gray-950">
      <Navbar />
      <HeroSection />
      <About />
      <Info />
      <Link />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
