import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Service />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
