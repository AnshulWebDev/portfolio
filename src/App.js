import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contactme from './component/Contactme';
import Footer from './component/Footer';


//Tailwind style
import '../src/style/navbar.css';
import '../src/style/herosection.css';
import '../src/style/projectsection.css';
import '../src/style/skillsection.css';
import '../src/style/contact.css';
import '../src/style/footer.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contactme />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;