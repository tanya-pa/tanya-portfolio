import headerImg from '/src/assets/header.jpeg';
import { TextScroll } from "../TextScroll"

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-40">
            <TextScroll>
                <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4 gap-10">
                    <div className="text-center md:text-left flex-[1.2] min-w-0">

                        <h1 className="text-5xl md:text-5xl font-bold text-center mb-6 flex flex-wrap justify-center items-center gap-3">
                            <span className="inline-block animate-bounce-sparkle text-[#F96074] delay-0">✩</span>
                            <span className="inline-block animate-bounce-sparkle text-[#FF9FAB] delay-200">₊˚</span>
                            <span className="inline-block animate-bounce-sparkle text-[#9E7BB5] delay-200">.⋆</span>
                            
                            <span className="bg-gradient-to-r from-[#F96074] to-[#766DA7] bg-clip-text text-transparent">
                                Tanya Paul
                            </span>
                            
                            <span className="inline-block animate-bounce-sparkle text-[#766DA7] delay-400">☾</span>
                            <span className="inline-block animate-bounce-sparkle text-[#9E7BB5] delay-600">⋆⁺₊</span>
                            <span className="inline-block animate-bounce-sparkle text-[#FF9FAB] delay-800">✧</span>
                        </h1>

                        <p className="text-white text-center text-lg mb-8 max-w-3xl">
                            Hi, I'm Tanya! I'm a <span className="text-[#FF9FAB]">creative student developer & artist at Cornell University </span> studying CS & linguistics.
                            I love building aesthetic, human-centered solutions and exploring the intersection of technology & language.
                        </p>
                        <div className="flex justify-center space-x-10">
                            <a href="#projects" className="bg-[#766DA7] text-white px-6 py-3 font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                                VIEW PROJECTS <span className="ml-2"> 🛠️ </span>
                            </a>
                            <a href="#contact" className="bg-[#F96074] text-white px-6 py-3 font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                                CONTACT ME <span className="ml-2"> ✉️ </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src={headerImg}
                            alt="Photo of Tanya"
                            className="mb-8 md:mb-0 max-w-md w-full border-[6px] border-[#F96074] shadow-[8px_8px_0_#766DA7] bg-white"
                        />
                    </div>
                </div>
            </TextScroll>
        </section>
    )
}