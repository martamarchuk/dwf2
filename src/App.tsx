import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Catalogue from './components/Catalogue';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Philosophy />
      <Catalogue />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
