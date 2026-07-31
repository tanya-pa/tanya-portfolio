import { useState } from "react"
import { TextScroll } from "../TextScroll"
import { SectionHeading } from "../SectionHeading"
import { Mail, MapPin, Palette, Bird } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "../BrandIcons"
import { AnimatedIcon } from "../AnimatedIcon"
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [msgData, setMsgData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleMsg = (msg) => {
        msg.preventDefault()
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            msg.target,
            import.meta.env.VITE_PUBLIC_KEY)
        .then(() => {
            alert("message sent!")
            setMsgData({ name: "", email: "", message: "" })
        }).catch(() => alert("oh no! something went wrong. please edit your submission & try again."))
    }
    return (
        <section
            id="contact"
            className="min-h-screen py-36">
            <TextScroll>
                <div className="w-full max-w-5xl mx-auto px-4">
                <SectionHeading icon={Bird} variant="flap">get in touch</SectionHeading>
                <div className="flex flex-col md:flex-row gap-5 w-full">

                    <div className="flex-1 rounded-xl bg-white/5 p-8 shadow-lg border border-white/10">
                        <h4 className="text-2xl font-bold mb-10 text-[#D06224] text-left">
                            send a message
                        </h4>
                        <form className="space-y-6" onSubmit={handleMsg}>
                            <div className="relative">
                                <input type="text" id="name" name="name" required value={msgData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#D06224] focus:bg-[#D06224]/10"
                                placeholder="name"
                                onChange={(msg) => setMsgData({...msgData, name: msg.target.value})}/>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" name="email" required value={msgData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#D06224] focus:bg-[#D06224]/10"
                                placeholder="example@gmail.com"
                                onChange={(msg) => setMsgData({...msgData, email: msg.target.value})}/>
                            </div>
                            <div className="relative">
                                <textarea id="message" name="message" required rows={5} value={msgData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#D06224] focus:bg-[#D06224]/10"
                                placeholder="your message here"
                                onChange={(msg) => setMsgData({...msgData, message: msg.target.value})}/>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#D06224] text-white px-6 py-3 font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(208,98,36,0.4)]">
                                    submit form
                            </button>
                        </form>
                    </div>
                    <div className="flex-1 rounded-xl bg-gradient-to-br from-[#8A8635]/20 via-[#D06224]/10 to-[#8A8635]/30 p-8 shadow-lg border border-white/10 flex flex-col">
                        <h3 className="text-2xl font-bold mb-10 text-[#D06224] text-left">contact & links</h3>
                        <ul className="space-y-10 text-white text-lg">
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="font-semibold text-[#EAC891] flex items-center gap-2 shrink-0"><AnimatedIcon icon={Mail} size={18} /> email:</span> <span className="sm:ml-1 text-lg break-all">tanya26.paul@gmail.com</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                                <span className="font-semibold text-[#EAC891] flex items-center gap-2 shrink-0"><AnimatedIcon icon={MapPin} size={18} /> based in:</span> <span className="sm:ml-1 text-lg">rockville, md & ithaca, ny</span>
                            </li>
                            <li>
                                <a
                                href={'https://github.com/tanya-pa'}
                                className="font-semibold text-[#EAC891] flex items-center gap-2">
                                <AnimatedIcon icon={GithubIcon} size={18} /> github</a>
                            </li>
                            <li>
                                <a
                                href={'https://www.linkedin.com/in/tanyapaul-tech/'}
                                className="font-semibold text-[#EAC891] flex items-center gap-2">
                                <AnimatedIcon icon={LinkedinIcon} size={18} /> linkedin</a>
                            </li>
                            <li>
                                <a
                                href={'https://toonyadraw.wordpress.com/'}
                                className="font-semibold text-[#EAC891] flex items-center gap-2">
                                <AnimatedIcon icon={Palette} size={18} /> art portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </TextScroll>
        </section>
    )
}