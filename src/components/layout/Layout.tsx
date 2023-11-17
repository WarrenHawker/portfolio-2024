import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="page-content">
      <Header />
      <LazyMotion features={domAnimation} strict>
        <m.main
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          {children}
        </m.main>
      </LazyMotion>
      <Footer />
    </div>
  );
};
export default Layout;
