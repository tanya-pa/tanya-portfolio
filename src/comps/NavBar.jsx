import { useEffect } from "react"
import { Menu, Mail } from "lucide-react"
import { AnimatedIcon } from "./AnimatedIcon"
import { GithubIcon, LinkedinIcon } from "./BrandIcons"
export const NavBar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])
    return (
        <nav className = "fixed top-0 w-full z-40 bg-[rgba(28,21,18,0.8)] backdrop-blur-lg border-b border-black/10 shadow-md">
            <div className = "max-w-5xl mx-auto px-4">
                <div className = "flex justify-between items-center h-16">
                    <a href="#home" className="text-xl font-bold text-[#D06224]">tanya paul</a>
                    <button
                        className="text-white cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Open Menu">
                        <AnimatedIcon icon={Menu} size={24} />
                    </button>
                    <div className = "hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-[#D06224] transition-colors">home</a>
                        <a href="#about" className="text-white hover:text-[#D06224] transition-colors">about</a>
                        <a href="#experience" className="text-white hover:text-[#D06224] transition-colors">experience</a>
                        <a href="#projects" className="text-white hover:text-[#D06224] transition-colors">projects</a>
                        <a href="#contact" className="text-white hover:text-[#D06224] transition-colors">contact</a>
                        <div className="flex items-center space-x-5 pl-5 border-l border-white/10">
                            <a href="https://github.com/tanya-pa" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-[#D06224] transition-colors" aria-label="GitHub">
                                <AnimatedIcon icon={GithubIcon} size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/tanyapaul-tech/" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-[#D06224] transition-colors" aria-label="LinkedIn">
                                <AnimatedIcon icon={LinkedinIcon} size={20} />
                            </a>
                            <a href="mailto:tanya26.paul@gmail.com"
                                className="text-white hover:text-[#D06224] transition-colors" aria-label="Email">
                                <AnimatedIcon icon={Mail} size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>)
}