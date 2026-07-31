import { TextScroll } from "../TextScroll"
import { SectionHeading } from "../SectionHeading"
import { Sparkles, MessageCircleHeart, Rocket, FlaskConical, ArrowUpRight, Flower2 } from "lucide-react"
import { AnimatedIcon } from "../AnimatedIcon"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-36">
            <TextScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <SectionHeading icon={Flower2} variant="grow">featured projects</SectionHeading>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-[#D06224]/30 to-[#EAC891]/15
                    hover:-translate-y-1 hover:border-[#D06224]/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#D06224]"><AnimatedIcon icon={Sparkles} size={20} className="text-[#8A8635]" /> Eau de You</h3>
                            <p className="text-gray-200 mb-4">
                                A perfume recommendation platform based on free-text queries. Users can discover a new signature perfume composed of their desired scent notes & moods.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "MySQL", "HTML", "CSS", "Javascript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="font-mono bg-[#8A8635]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#8A8635]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                        {tech}
                                    </span>))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href={'https://eau_de_you_backend_app.4300showcase.infosci.cornell.edu/'}
                                    className="text-[#D06224] hover:text-[#E8834A] my-4 transition-colors flex items-center gap-1">
                                    View Project <ArrowUpRight size={16} /></a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-[#8A8635]/30 to-[#EAC891]/12
                    hover:-translate-y-1 hover:border-[#8A8635]/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#D06224]"><AnimatedIcon icon={MessageCircleHeart} size={20} className="text-[#8A8635]" /> Joy</h3>
                            <p className="text-gray-200 mb-4">
                                A web application that uses natural language processing to detect the tone and presence of sarcasm in text, with the purpose of aiding neurodivergent users.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Javascript", "HTML", "CSS", "seaborn", "TensorFlow", "scikit-learn"].map((tech, key) => (<span
                                    key={key}
                                    className="font-mono bg-[#8A8635]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#8A8635]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href={'https://devpost.com/software/joy'}
                                    className="text-[#D06224] hover:text-[#E8834A] my-4 transition-colors flex items-center gap-1">
                                    View Project <ArrowUpRight size={16} /></a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-[#AE431E]/30 to-[#8A8635]/15
                    hover:-translate-y-1 hover:border-[#AE431E]/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#D06224]"><AnimatedIcon icon={Rocket} variant="launch" size={20} className="text-[#8A8635]" /> Mars Rover</h3>
                            <p className="text-gray-200 mb-4">
                                A collaborative, interdisciplinary, Cornell Engineering Project Team developing a semi-autonomous rover. Contributions include
                                autonomous navigation, control dashboard, & birds-eye camera.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "ROS2", "C++", "React", "JavaScript"].map((tech, key) => (<span
                                    key={key}
                                    className="font-mono bg-[#8A8635]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#8A8635]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href={'https://marsrover.engineering.cornell.edu/'}
                                    className="text-[#D06224] hover:text-[#E8834A] my-4 transition-colors flex items-center gap-1">
                                    View Website <ArrowUpRight size={16} /></a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10
                    bg-gradient-to-br from-[#EAC891]/30 to-[#D06224]/12
                    hover:-translate-y-1 hover:border-[#EAC891]/40 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#D06224]"><AnimatedIcon icon={FlaskConical} size={20} className="text-[#8A8635]" /> In Progress</h3>
                            <div className="text-gray-200 mb-4">
                                <ul className="space-y-5">
                                    <li>
                                        <span className="font-semibold text-[#EAC891]">wing it:</span> <span className="ml-1 text-md"> insect classifier and collector </span>
                                    </li>
                                    <li>
                                        <span className="font-semibold text-[#EAC891]">the mood of the internet:</span> <br /> <span className="ml-1 text-md"> vintage geocities aesthetics analyzer & visualization</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["to be added!"].map((tech, key) => (<span
                                    key={key}
                                    className="font-mono bg-[#8A8635]/10 text-[#B5B15E] px-3 py-1 rounded-full text-sm \
                                    hover:bg-[#8A8635]/20 hover:shadow-[0_2px_8px_rgba(255, 255, 255, 0.2)] transition">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D06224] my-4">
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