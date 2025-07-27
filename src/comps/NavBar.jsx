import { useEffect } from "react"

export const NavBar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])
    return (
        <nav className = "fixed top-0 w-full z-40 bg-[rgba(21,25,30,0.8)] backdrop-blur-lg border-b border-black/10 shadow-md">
            <div className = "max-w-5xl mx-auto px-4"> 
                <div className = "flex justify-between items-center h-16">
                    <a href="#home" className="text-xl font-bold text-[#F96074]">{" "}TANYA PAUL</a>
                    <div className="w-7 h-5 text-white relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}> 
                        &#9776;
                    </div> 
                    <div className = "hidden md:flex items-center space-x-8">  
                        <a href="#home" className="text-white hover:text-[#F96074] transition-colors">  ☆ HOME </a>
                        <a href="#about" className="text-white hover:text-[#F96074] transition-colors">  ☆ ABOUT </a>
                        <a href="#projects" className="text-white hover:text-[#F96074] transition-colors">  ☆ PROJECTS </a>
                        <a href="#contact" className="text-white hover:text-[#F96074] transition-colors">  ☆ CONTACT </a>
                    </div>
                </div>
            </div>
        </nav>)
}