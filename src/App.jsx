import './App.css';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import ServicesSection from './components/service/Services';
import WhyChooseUs from './components/whyus/WhyChooseUs';

function App() {
  
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    </>
  )
}

export default App
