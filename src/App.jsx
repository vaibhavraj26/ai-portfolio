import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import CredentialsPreview from './components/CredentialsPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ProjectDetails from './components/ProjectDetails';
import Profile from './components/Profile';
import ScrollIndicator from './components/ScrollIndicator';
import ServiceUnavailable from './components/ServiceUnavailable';
import LoadingScreen from './components/LoadingScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Process />
        <CredentialsPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressIntervalId;
    let completeTimeoutId;
    let hideLoaderTimeoutId;

    document.body.style.overflow = 'hidden';

    progressIntervalId = window.setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 92) {
          return currentProgress;
        }

        const increment = Math.max(1, Math.round((100 - currentProgress) / 8));
        return Math.min(currentProgress + increment, 92);
      });
    }, 80);

    completeTimeoutId = window.setTimeout(() => {
      window.clearInterval(progressIntervalId);
      setProgress(100);

      hideLoaderTimeoutId = window.setTimeout(() => {
        setIsLoading(false);
      }, 350);
    }, 1600);

    return () => {
      window.clearInterval(progressIntervalId);
      window.clearTimeout(completeTimeoutId);
      window.clearTimeout(hideLoaderTimeoutId);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white selection:bg-white/20 cursor-none">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            setShowContent(true);
            document.body.style.overflow = '';
          }}
        >
          {isLoading && <LoadingScreen progress={progress} />}
        </AnimatePresence>

        {showContent && (
          <>
            <Cursor />
            <ScrollIndicator />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/unavailable" element={<ServiceUnavailable />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
