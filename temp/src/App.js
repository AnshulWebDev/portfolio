import React from 'react'

//components
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import ProjectSection from './component/ProjectSection';


//Tailwind style
import '../src/style/navbar.css';
import '../src/style/herosection.css';
import '../src/style/projectsection.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <ProjectSection/>
      
    </>

  )
}

export default App;