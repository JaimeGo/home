import React from "react";
import "./App.css";

import RightColumn from "./components/RightColumn";
import LeftColumn from "./components/LeftColumn";
import LeftBar from "./components/LeftBar";
import PortfolioSection from "./components/LeftBar";
import ServicesSection from "./components/LeftBar";
import SkillSection from "./components/LeftBar";
import Footer from "./components/LeftBar";
import ContactSection from "./components/LeftBar";
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
