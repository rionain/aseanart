import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import FeaturedProducts from './components/FeaturedProducts';
import ServiceHighlight from './components/ServiceHighlight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <HeroBanner />
        <FeaturedProducts />
        <ServiceHighlight />
      </main>
      <Footer />
    </div>
  );
}

export default App;
