import About from './views/About';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
