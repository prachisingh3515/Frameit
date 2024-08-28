import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import About from "./components/About";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import './App.css'
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Contact from "./components/Contact";

function App() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <div className="app">
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Gallery/>
    <Review/>
    <Contact/>
    </div>
  )
}

export default App
