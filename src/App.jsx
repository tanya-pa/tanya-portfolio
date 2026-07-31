
import './App.css';
import { useState } from "react";
import "./index.css";
import { NavBar } from './comps/NavBar';
import { Mobile } from './comps/Mobile';
import { Home } from './comps/sections/Home';
import { About } from './comps/sections/About';
import { Experience } from './comps/sections/Experience';
import { Projects } from './comps/sections/Projects';
import { Contact } from './comps/sections/Contact';
import { Footer } from './comps/Footer';

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="relative z-10">
        <div className="relative min-h-screen transition-opacity duration-700 opacity-100">
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Mobile menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

          <Home/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>

          <Footer />
        </div>
      </div>
    </>
  
  )
    
}

export default App;
