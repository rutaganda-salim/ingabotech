import './App.css';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import ServicesSection from './components/service/Services';
import WhyChooseUs from './components/whyus/WhyChooseUs';
import AboutUs from './components/aboutus/AboutUs';

function App() {
  
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    <AboutUs />
    </>
  )
}

export default App
