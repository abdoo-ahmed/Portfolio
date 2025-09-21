import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import CustomCursor from "./Components/CustomCursor";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactSection from "./Components/ContactSection";
import SkillsSection from "./Components/SkillsSection";
import ExperienceSection from "./Components/Experience";
import ProgressBar from "./Components/ProgressBar";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <ProgressBar />
    </>
  );
}

export default App;
