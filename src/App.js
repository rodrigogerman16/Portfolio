import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from './Footer/Form.js';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Work from './Body/Work';
import About from './About/About';
import Skills from './Skills/Skills';
import Stack from './Stack/Stack';
import GameQA from './GameQA/GameQA';
import PageTransition from './PageTransition';
import { Route, Switch, useLocation } from 'react-router-dom';

const PAGE_TITLES = {
  '/': 'Rodrigo German - Full Stack Developer & QA Engineer',
  '/about': 'About - Rodrigo German',
  '/work': 'Work - Rodrigo German',
  '/contact': 'Contact - Rodrigo German',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] || PAGE_TITLES['/'];
  }, [location.pathname]);

  return (
    <div className="App">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-ink-950"
      >
        Skip to main content
      </a>
      <NavBar/>
      <main id="main-content">
        <Switch>
          <Route exact path="/">
            <PageTransition>
              <Header/>
              <Work/>
              <GameQA/>
              <Stack/>
              <Skills/>
              <Form/>
            </PageTransition>
          </Route>
          <Route exact path="/about">
            <PageTransition>
              <About/>
            </PageTransition>
          </Route>
          <Route exact path="/work">
            <PageTransition>
              <Work isPageHeading/>
            </PageTransition>
          </Route>
          <Route exact path="/contact">
            <PageTransition>
              <Form isPageHeading/>
            </PageTransition>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
