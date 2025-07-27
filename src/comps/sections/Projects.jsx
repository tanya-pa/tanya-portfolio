import { TextScroll } from "../TextScroll"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-30">
            <TextScroll> 
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#F96074] to-[#766DA7] bg-clip-text text-transparent text-center">
                    ⋆｡‧˚ʚ featured projects 💡 ɞ˚‧｡⋆
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-fuchsia-200/20 via-pink-400/20 to-yellow-200/20
                    hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">  <span className="mr-2">🧴✨🌸</span> Eau De You </h3>
                        <p className="text-gray-200 mb-4">
                            A perfume recommendation platform based on free-text queries. Users can discover a new signature perfume composed of their desired scent notes & moods.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "MySQL", "HTML", "CSS"].map((tech, key) => (
                                <span 
                                key={key}
                                className= "font-mono bg-[#F96074]/10 text-[#F96074] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#F96074]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href={'http://4300showcase.infosci.cornell.edu:5224/'}
                                className="text-[#F96074] hover:text-[#FFA3AF] my-4 tranisition-colors">
                                View Project ➜ </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-yellow-100/20 via-orange-300/20 to-red-200/20
                    hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">  <span className="mr-2">🌻✨💬 </span> Joy </h3>
                        <p className="text-gray-200 mb-4">
                            A web application that uses natural language processing to detect the tone and presence of sarcasm in text, with the purpose of aiding neurodivergent users.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "Javascript", "HTML", "CSS", "seaborn", "TensorFlow", "scikit-learn"].map((tech, key) => (<span 
                                key={key}
                                className= "font-mono bg-[#E09024]/10 text-[#E09024] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#E09024]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href={'https://devpost.com/software/joy'}
                                className="text-[#F96074] hover:text-[#FFA3AF] my-4 tranisition-colors">
                                View Project ➜ </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-red-500/20 via-orange-400/20 to-pink-500/20
                    hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">  <span className="mr-2">🚀🌌🤖</span> Cornell Mars Rover </h3>
                        <p className="text-gray-200 mb-4">
                           A collaborative, interdisciplinary, Cornell Engineering Project Team developing a semi-autonomous rover. Software subteam member contributing to 
                           autonomous navigation algos, control dashboard, & birds-eye camera view of rover.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "ROS2", "C++", "React", "JavaScript"].map((tech, key) => (<span 
                                key={key}
                                className= "font-mono bg-[#ff915b]/10 text-[#ff915b] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#ff915b]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href={'https://marsrover.engineering.cornell.edu/'}
                                className="text-[#F96074] hover:text-[#FFA3AF] my-4 tranisition-colors">
                                View Team Website ➜ </a>
                        </div>
                    </div>

                     <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-indigo-200/20 via-purple-400/20 to-pink-200/20
                    hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">  <span className="mr-2">📀🎥📺</span> Works in Progress </h3>
                        <p className="text-gray-200 mb-4">
                            <ul className="space-y-5">
                                <li>
                                    <span className="font-semibold text-[#FF9FAB]">wing it:</span> <span className="ml-1 text-md"> a computer-vision powered insect identifier & classifier </span>
                                </li>
                                <li>
                                    <span className="font-semibold text-[#FF9FAB]">the mood of the internet:</span> <br/> <span className="ml-1 text-md"> a vintage geocities aesthetics analyzer & visualization</span>
                                </li>
                            </ul>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["to be added :)"].map((tech, key) => (<span 
                               key={key}
                                className= "font-mono bg-[#B362FF]/10 text-[#B362FF] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#B362FF]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[#F96074] hover:text-[#FFA3AF] my-4 tranisition-colors">
                                Coming Soon
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            </TextScroll> 
        </section>
    )
}