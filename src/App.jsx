import Hero from './components/Hero';
import WheelConfigurator from './components/WheelConfigurator';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="relative z-0">
        <WheelConfigurator />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
