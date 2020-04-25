import React from "react";
import "./App.css";

import RightColumn from "./components/RightColumn";
import LeftColumn from "./components/LeftColumn";
import LeftBar from "./components/LeftBar";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import IntroductionSection from "./components/IntroductionSection";

function App() {
  return (
    <div className="App">
      <LeftColumn>
        <LeftBar />
      </LeftColumn>
      <RightColumn>
        <IntroductionSection />
        <ServicesSection />
        <SkillSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </RightColumn>
    </div>
  );
}

export default App;
