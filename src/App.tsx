import './App.scss';
import ErrorBoundary from './Components/ErrorBoundary';
import Technologies from './Components/Technologies';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import { useEffect, useState } from 'react';

const isMobileWidth = () => {
  if (!window) {
      return false;
  } else if (window.innerWidth <= 1000) {
      return true;
  }
  return false;
};

function App() {
  const [navToggled, setNavToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(isMobileWidth());
  useEffect(() => {
    window.addEventListener('resize', onResizeIsMobile);
    return () => window.removeEventListener('resize', onResizeIsMobile);
  }, [isMobile]);
  const onResizeIsMobile = () => {
      setIsMobile(isMobileWidth());
  }
  return <ErrorBoundary>
      <Header isMobile={isMobile} navToggled={navToggled} setNavToggled={setNavToggled} />
      <main className={navToggled ? 'nav-toggled': ''}>
        <div className="background-imgs">
            <img src="/dorian-t-charts.jpeg" alt="Dorian T-Charting Recursion" />
            <img src="/dorian-image.jpeg" alt="Dorian playing the cello" />
        </div>
        <AboutMe />
        <Experience />
        <Technologies />
        <Projects />  
        <Contact />
        <Footer isMobile={isMobile} />
      </main>
    </ErrorBoundary>;
}

export default App;
