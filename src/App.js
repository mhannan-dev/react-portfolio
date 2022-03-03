import React from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Exprience from './components/experience/Exprience';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';
import Testimonial from './components/testimonial/Testimonial';
function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Exprience />
     <Service />
     <Portfolio />
     <Testimonial />
     <Contact />
    </>
  );
}

export default App;
