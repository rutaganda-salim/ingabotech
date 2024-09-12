import './App.css';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import ServicesSection from './components/service/Services';
import WhyChooseUs from './components/whyus/WhyChooseUs';
import AboutUs from './components/aboutus/AboutUs';
import TeamSection from './components/Team/Team';
import ReviewsSection from './components/Reviews/Reviews';
import SubscriptionSection from './components/subscribeSection/Subscribe';

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <AboutUs />
      <TeamSection />
      <ReviewsSection />
      <SubscriptionSection />
    </>
  )
}

export default App
