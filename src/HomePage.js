
import './App.css';
import Navbar from './components/Common/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ServiceCards from './components/Services/ServiceCards';
import Stats from './components/Stats/Stats';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Common/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCards />
      <Stats />
      <WhatWeDo />
      <Testimonial />
      <Blog />
      
      <Contact />
      <Footer title="2025" />
    </>
  );
}

export default App;
