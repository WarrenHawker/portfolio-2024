import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="page-content">
      <Header />
      <motion.main
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
export default Layout;
