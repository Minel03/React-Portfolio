import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500'>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
