import About from './views/About';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './views/home';

const App = () => {
  return (
    <div className="page-content">
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
