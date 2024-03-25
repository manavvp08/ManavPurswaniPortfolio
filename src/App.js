import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactButtons from './components/ContactButtons/ContactButtons'
import AboutSection from './components/About/AboutSection';
import LandingSection from './components/Landing/LandingSection'
import ProjectSection from './components/Projects/ProjectSection'
import ReactBreakpoints from 'react-breakpoints'
import SkillsSection from './components/Skills/SkillsSection'
import ExperienceSection from './components/Experience/ExperienceSection'
import Footer from './components/Footer/Footer'
import NavBar from './components/Nav/NavBar'
import {updateNightMode} from "./components/data"
function App() {

  const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
  }

  useEffect(()=>{
   updateNightMode();
  }, [])
  return (
    <>
      <div id="app-root">
      
          <ReactBreakpoints breakpoints={breakpoints}>
            <NavBar />
            <ContactButtons />
            <LandingSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectSection />
            <Footer />
          </ReactBreakpoints>
      </div>
    </>

  );
}

export default App;


