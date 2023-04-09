import React from 'react'
//components
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import ProjectSection from './component/ProjectSection';
import SkillsSection from './component/SkillsSection';
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
    <>
    <Navbar/>
    <Herosection/>
    <ProjectSection/>
    <SkillsSection/>
    <Contactme/>
    <Footer/>
    </>
  )
}

export default App;