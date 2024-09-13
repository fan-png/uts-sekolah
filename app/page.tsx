import HeroSection from './components/HeroSection';
import DistributedTeamsSection from './components/DistributedTeamsSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DistributedTeamsSection /> {/* New Section Added Here */}
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
