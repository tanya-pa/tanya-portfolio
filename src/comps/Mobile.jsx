import { X, Mail } from "lucide-react"
import { AnimatedIcon } from "./AnimatedIcon"
import { GithubIcon, LinkedinIcon } from "./BrandIcons"

export const Mobile = ({menuOpen, setMenuOpen}) => {
    return (
        <div className ={`fixed top-0 left-0 w-full bg-[rgba(28,21,18,0.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none cursor-pointer"
            aria-label="Close Menu">
                <AnimatedIcon icon={X} size={28} />
            </button>
            <a href="#home" onClick={() => setMenuOpen(false)}
                className={`text-2xl hover:text-[#8A8635] font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}
                className={`text-2xl hover:text-[#8A8635] font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>about</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}
                className={`text-2xl hover:text-[#8A8635] font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}
                className={`text-2xl hover:text-[#8A8635] font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}
               className={`text-2xl hover:text-[#8A8635] font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>contact</a>
            <div className={`flex items-center space-x-6 mt-6 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <a href="https://github.com/tanya-pa" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#8A8635] transition-colors" aria-label="GitHub">
                    <AnimatedIcon icon={GithubIcon} size={26} />
                </a>
                <a href="https://www.linkedin.com/in/tanyapaul-tech/" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#8A8635] transition-colors" aria-label="LinkedIn">
                    <AnimatedIcon icon={LinkedinIcon} size={26} />
                </a>
                <a href="mailto:tanya26.paul@gmail.com"
                    className="text-white hover:text-[#8A8635] transition-colors" aria-label="Email">
                    <AnimatedIcon icon={Mail} size={26} />
                </a>
            </div>
        </div>
    )
}