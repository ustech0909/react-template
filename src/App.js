
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import WhatWeDo from './components/WhatWeDo';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <WhatWeDo />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
