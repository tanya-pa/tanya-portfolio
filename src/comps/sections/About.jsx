import { TextScroll } from "../TextScroll"
import { SectionHeading } from "../SectionHeading"
import { Code2, BrainCircuit, Wrench, Leaf } from "lucide-react"
import { AnimatedIcon } from "../AnimatedIcon"
import aboutImg from '/src/assets/about.webp';
export const About = () => {
        const languageItems = [ "Python",  "JavaScript", "Java", "SQL",  "Swift", "R", "OCaml", "HTML & CSS","C", "React/Node"]
        const aiMlItems = ["NLP", "Agentic AI", "PyTorch", "TensorFlow", "Keras", "scikit-learn",  "LangChain"]
        const toolsItems = ["Figma", "Docker", "AWS", "Git/GitHub", "Jupyter", "Linux", "Jira", "Kanban"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-36">
            <TextScroll>
                <div className="max-w-5xl mx-auto px-4">
                <SectionHeading icon={Leaf} variant="rustle">about me</SectionHeading>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

                <div className="flex justify-center shrink-0">
                    <img
                    src={aboutImg}
                    alt="Picture of Tanya"
                    className="w-[clamp(280px,26vw,420px)] rounded-2xl ring-1 ring-white/10 shadow-xl shadow-[#D06224]/20 transition-all duration-300"
                    />
                </div>

                <div className="flex-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-12">
                    <p className="text-white text-lg text-left leading-relaxed">
                    I’m a <span className="text-[#EAC891]">product-minded engineer </span> who loves defining and solving social and digital challenges through technology — 
                    most recently by designing agentic workflows for data delivery at <span className="text-[#EAC891]">Wells Fargo</span>. 
                    In my spare time, I make fun web applications based on my personal interests, experimenting with new tools along the way!
                    </p>

                    <p className="text-white text-lg text-left leading-relaxed">
                    Beyond tech, I’m a digital artist, hobbyist entomologist, plant lover, amateur internet archaeologist, and cinephile.
                    </p>

                    <p className="text-md text-gray-400 italic text-left">
                    p.s. i also have a small art portfolio - check out
                    <a
                        href="https://toonyadraw.wordpress.com/"
                        className="ml-1 text-[#EAC891] underline hover:text-[#D06224] transition"
                    >
                        my work here!
                    </a>
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pt-12">
                    <div className="rounded-xl p-6 bg-gradient-to-br from-[#8A8635]/20 via-[#D06224]/10 to-[#8A8635]/20 shadow hover:scale-105 transition relative overflow-hidden">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><AnimatedIcon icon={Code2} size={20} className="text-[#B5B15E]" /> Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {languageItems.map((tech, key) => (
                        <span key={key} className="font-mono bg-[#B5B15E]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm hover:bg-[#B5B15E]/20 hover:shadow transition">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                    <div className="rounded-xl p-6 bg-gradient-to-br from-[#D06224]/10 via-[#8A8635]/20 to-[#D06224]/10 shadow hover:scale-105 transition relative overflow-hidden">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><AnimatedIcon icon={BrainCircuit} size={20} className="text-[#B5B15E]" /> AI / ML</h3>
                    <div className="flex flex-wrap gap-2">
                        {aiMlItems.map((tech, key) => (
                        <span key={key} className="font-mono bg-[#B5B15E]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm hover:bg-[#B5B15E]/20 hover:shadow transition">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                    <div className="rounded-xl p-6 bg-gradient-to-br from-[#8A8635]/15 via-[#D06224]/15 to-[#8A8635]/10 shadow hover:scale-105 transition relative overflow-hidden">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><AnimatedIcon icon={Wrench} size={20} className="text-[#B5B15E]" /> Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {toolsItems.map((tech, key) => (
                        <span key={key} className="font-mono bg-[#B5B15E]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm hover:bg-[#B5B15E]/20 hover:shadow transition">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>

                </div>
            </TextScroll>
        </section>
    )
}
