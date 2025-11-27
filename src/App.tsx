import React from 'react';
import { LayoutProvider } from './components/LayoutContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <LayoutProvider>
      <div className="font-['Poppins'] scroll-smooth overflow-hidden">
        <Navigation />
        <main>
          <Hero />
          <Experience />
          {/* <Portfolio /> */}
          <Skills />
          <Education />
          <Languages />
          <Contacts />
        </main>
        <Footer />
      </div>
    </LayoutProvider>
  );
}

export default App;