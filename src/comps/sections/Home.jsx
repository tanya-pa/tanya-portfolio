import headerImg from '/src/assets/header.webp';
import { TextScroll } from "../TextScroll"
import { FlowerDrawing } from "../FlowerDrawing"

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-40">
            <TextScroll>
                <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4 gap-10">
                    <div className="text-left w-full md:flex-1 min-w-0">

                        <h1 className="text-[clamp(2rem,1.38rem+2.63vw,3.75rem)] font-bold mb-6 text-[#D06224] flex flex-wrap items-center gap-3">
                            <FlowerDrawing className="w-[clamp(2rem,4.5vw,3.25rem)] h-auto shrink-0" />
                            hi, i'm tanya!
                        </h1>

                        <p className="text-white text-left text-[clamp(1rem,0.82rem+0.89vw,1.25rem)] mb-8 max-w-3xl">
                            <span className="text-[#EAC891]">Creative student developer and artist at Cornell University </span> studying CS & linguistics.
                            I design and build aesthetic, human-centered software at the intersection of technology and the humanities.
                        </p>
                        <div className="md:hidden flex justify-center mb-8">
                            <img
                                src={headerImg}
                                alt="Photo of Tanya"
                                className="w-[min(85%,26rem)] rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-[#8A8635]/20"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <a href="#projects" className="bg-[#8A8635] text-white px-6 py-3 font-medium text-center whitespace-nowrap transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                                VIEW PROJECTS
                            </a>
                            <a href="#contact" className="bg-[#D06224] text-white px-9 py-3 font-medium text-center whitespace-nowrap transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                                CONTACT ME
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center shrink-0">
                        <img
                            src={headerImg}
                            alt="Photo of Tanya"
                            className="w-[clamp(220px,38vw,420px)] rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-[#8A8635]/20"
                        />
                    </div>
                </div>
            </TextScroll>
        </section>
    )
}