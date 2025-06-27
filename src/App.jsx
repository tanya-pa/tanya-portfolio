
import './App.css';
import { useState } from "react";
import { LoadingScreen } from './comps/LoadingScreen';
import "./index.css"
import { NavBar } from './comps/NavBar';
import { Mobile } from './comps/Mobile';
import { Home } from './comps/sections/Home';
import { About } from './comps/sections/About';
import { Projects } from './comps/sections/Projects';
import { Contact } from './comps/sections/Contact';
import { Footer } from './comps/Footer';

function App() {
  const[isLoaded, setLoaded] = useState(false)
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)}/>}
      <div className="noise-overlay"/>
      <div className="relative z-10">
        <div className = {`relative min-h-screen transition-opacuty duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"}
          bg-#FCECDD text-#FF7601`}>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Mobile menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

          <Home/>
          <div className="flex items-center justify-center my-30">
            <span className="w-1/3 border-t border-[#F96074]/30"></span>
            <span className="mx-4 text-[#FF9FAB] text-xl">☾</span>
            <span className="w-1/3 border-t border-[#F96074]/30"></span>
          </div>


          <About/>
          <div className="flex items-center justify-center my-30">
            <span className="w-1/3 border-t border-[#F96074]/30"></span>
            <span className="mx-4 text-[#FF9FAB] text-xl">✩</span>
            <span className="w-1/3 border-t border-[#F96074]/30"></span>
          </div>


          <Projects/>
          <div className="flex items-center justify-center my-30">
            <span className="w-1/3 border-t border-[#F96074]/30"></span>
            <span className="mx-4 text-[#FF9FAB] text-xl">✧</span>
            <span className="w-1/3 border-t border-[#F96074]/30"></span>
          </div>


          <Contact/>


          <Footer />
        </div>
      </div>
    </>
  
  )
    
}

export default App;
