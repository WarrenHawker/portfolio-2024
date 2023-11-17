import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import Projects from '../views/Projects';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode={'wait'}>
      <Routes key={location.pathname} location={location}>
        <Route>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      //{' '}
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
