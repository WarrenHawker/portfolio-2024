import About from './components/About';
import Tech from './components/Tech';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="view" id="about">
          <About />
          <Tech />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
