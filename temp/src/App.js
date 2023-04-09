import React from 'react'

//components
import Navbar from './component/Navbar';

//Tailwind style
import '../src/style/navbar.css';
import '../src/style/herosection.css';
import Herosection from './component/Herosection';


const App = () => {
  return (
    <>
      <Navbar />
      <Herosection />
    </>

  )
}

export default App;