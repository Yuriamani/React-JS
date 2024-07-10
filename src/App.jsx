import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Body/Navbar";
import About from './Components/Body/About';
import Contact from './Components/Body/Contact';
import Home from './Components/Body/Home';
import Footer from './Components/Body/Footer';
import Pricing from './Components/Body/Pricing';
import Features from './Components/Body/Features';

const App = () => {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} /> 
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />               
            </Routes>
            <Footer />
        </div>
    </Router>
);
}

export default App