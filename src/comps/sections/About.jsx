import { TextScroll } from "../TextScroll"
export const About = () => {

        const fullStackItems = ["React", "TailwindCSS", "SQL", "HTML & CSS", "Figma", "Python", "Node.js", "JavaScript", "Java"]
        const MLItems = ["TensorFlow", "Sckit Learn", "PyTorch", "OpenCV", "NLTK"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-30">
            <TextScroll>
                <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#F96074] to-[#766DA7] bg-clip-text text-transparent">
                    ⋆˚𖥔 ݁ About Me 💬 ˖.☘︎ ݁˖
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-8 p-6">
                    <div className="w-full md:w-1/2 relative flex justify-center">
                        <img
                        src="/src/assets/about.png"
                        alt="Picture of Tanya"
                        className="w-40 md:w-3/4 max-w-xs border-4 border-[#F96074] shadow-[6px_6px_0_#766DA7]"
                        />
                    </div>

                    <div className="w-full md:w-1/2 md:pl-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                        <p className="text-white text-lg text-center md:text-left">
                        I’m an aspiring computational linguist passionate about exploring how machine learning can address social and digital challenges.
                        I’m especially drawn to the ways humanities-driven fields and technology intersect to expand our understanding of the world.
                        In my spare time, I love building web applications and experimenting with creative solutions.
                        Beyond tech, I’m a digital artist, amateur entomologist, internet archaeologist, and cinephile.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-md text-gray-400 italic">
                        p.s. i also have a small art portfolio on wordpress! check out 
                        <a 
                        href="https://toonyadraw.wordpress.com/" 
                        className="ml-1 text-[#FF9FAB] underline hover:text-[#F96074] transition"
                        >
                        my work here! 🎨
                        </a>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 pt-12">
                    <div className="p-6 bg-gradient-to-br from-[#766DA7]/20 via-[#F96074]/10 to-[#766DA7]/20 shadow hover:scale-105 transition relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"></div>
                    <h3 className="font-bold text-xl mb-3"> <span className="mr-2">🖥️</span> Full Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {fullStackItems.map((tech, key) => (
                        <span key={key} className="font-mono bg-[#9b8bf3]/10 text-[#9b8bf3] px-3 py-1 rounded-full text-sm hover:bg-[#9b8bf3]/20 hover:shadow transition">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-[#F96074]/10 via-[#766DA7]/20 to-[#F96074]/10 shadow hover:scale-105 transition relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"></div>
                    <h3 className="font-bold text-xl mb-3"> <span className="mr-2">⚙️</span> ML Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {MLItems.map((tech, key) => (
                        <span key={key} className="font-mono bg-[#9b8bf3]/10 text-[#9b8bf3] px-3 py-1 rounded-full text-sm hover:bg-[#9b8bf3]/20 hover:shadow transition">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>

                <div className="glass rounded-xl p-8 border border-pink-400/10 shadow-[0_4px_30px_rgba(255,255,255,0.05)]
                hover:-translate-y-1 transition-all relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"></div>
                    <div className="space-y-8">
                        
                    <div className="relative">

                        <h3 className="text-xl font-bold mb-4">Education ᯓ✦∘˙</h3>

                        <p className="text-gray-300 text-md">
                        <span className="mr-2">🎓</span>
                        <strong className="text-[#FF9FAB]">B.A. in CS & Linguistics</strong> — Cornell University (2023–2027)
                        <br/>
                        Relevant Coursework: DS & Functional Programming, OOP, Data Science, LinAlg Multivariable Calculus, ML, Algorithms
                        </p>
                    </div>

                    <h3 className="text-xl font-bold py-4 mb-4">Work Experience ⋆˚꩜｡</h3>

                    <div className="relative">
                        <p className="text-gray-300 text-md">
                        <span className="mr-2">💻</span>
                        <strong className="text-[#FF9FAB]">JHU APL</strong>: Asymmetric Ops Intern (2022)
                        </p>
                    </div>

                    <div className="relative">
                        <p className="text-gray-300 text-md">
                        <span className="mr-2">📊</span>
                        <strong className="text-[#FF9FAB]">Cornell Bowers CIS</strong>: Course Staff INFO 2950, CS 1110 (2024–Present)
                        </p>
                    </div>

                    <div className="relative">
                        <p className="text-gray-300 text-md">
                        <span className="mr-2">🔬</span>
                        <strong className="text-[#FF9FAB]">Cornell Comp Ling Lab</strong>: Research Assistant (2025–Present)
                        </p>
                    </div>
                    </div>
                </div>

                </div>
            </TextScroll>
        </section>
    )
}
