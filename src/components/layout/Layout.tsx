import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
// import { LazyMotion, domAnimation, m } from 'framer-motion';

const Layout = ({ children }: PropsWithChildren) => {
  // const isMobile = window.innerWidth < 600;

  // const MotionComponent = isMobile ? 'main' : m.main;
  return (
    <div className="page-content">
      <Header />
      {/* <LazyMotion features={domAnimation} strict> */}
      <main
      // initial={{ x: 300, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: -300, opacity: 0 }}
      >
        {children}
      </main>
      {/* </LazyMotion> */}
      <Footer />
    </div>
  );
};
export default Layout;
