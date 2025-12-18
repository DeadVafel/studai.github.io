
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Subscription from './components/Subscription';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Subscription />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
