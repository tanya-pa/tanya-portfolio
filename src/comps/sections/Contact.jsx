import { useState } from "react"
import { TextScroll } from "../TextScroll"
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
            className="min-h-screen py-30">
            <TextScroll>
                <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-[#F96074] to-[#766DA7] bg-clip-text text-transparent text-center"> 
                            ⊹ . ݁ get in touch! 👋 ݁ . ⊹
                </h2>
                <div className="flex flex-col md:flex-row gap-5 w-full max-w-6xl mx-auto px-4">
                    
                    <div className="flex-1 bg-white/5 p-8 shadow-lg border border-white/10">
                        <h4 className="text-2xl font-bold mb-10 bg-gradient-to-r from-[#F96074] to-[#766DA7] bg-clip-text text-transparent text-center"> 
                            📬 send a message
                        </h4>
                        <form className="space-y-6" onSubmit={handleMsg}>
                            <div className="relative">
                                <input type="text" id="name" name="name" required value={msgData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F96074] focus:bg-[#F96074]/10"
                                placeholder="name... "
                                onChange={(msg) => setMsgData({...msgData, name: msg.target.value})}/>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" name="email" required value={msgData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F96074] focus:bg-[#F96074]/10"
                                placeholder="example@gmail.com"
                                onChange={(msg) => setMsgData({...msgData, email: msg.target.value})}/>
                            </div>
                            <div className="relative">
                                <textarea id="message" name="message" required rows={5} value={msgData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F96074] focus:bg-[#F96074]/10"
                                placeholder="your message here ... "
                                onChange={(msg) => setMsgData({...msgData, message: msg.target.value})}/>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#F96074] text-white px-6 py-3 font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(223, 94, 116, 0.4)]">
                                    📬 submit form
                            </button>
                        </form>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-[#766DA7]/20 via-[#F96074]/10 to-[#766DA7]/30 p-8 shadow-lg border border-white/10 flex flex-col">
                        <h3 className="text-2xl font-bold mb-10 text-[#F96074] text-center"> ☏ contact info & links</h3>
                        <ul className="space-y-10 text-white text-lg">
                            <li>
                                <span className="font-semibold text-[#FF9FAB]">📧 email:</span> <span className="ml-1 text-lg">tanya26.paul@gmail.com</span>
                            </li>
                            <li>
                                <span className="font-semibold text-[#FF9FAB]">📍 based in:</span> <br/> <span className="ml-1 text-lg">rockville, md & ithaca, ny</span>
                            </li>
                            <li>
                                <a
                                href={'https://github.com/tanya-pa'}
                                className="font-semibold text-[#FF9FAB]">
                                💻 github </a>
                            </li>
                            <li>
                                <a
                                href={'https://www.linkedin.com/in/tanya-paul-42a011367/'}
                                className="font-semibold text-[#FF9FAB]">
                                🔗 linkedin </a>
                            </li>
                            <li>
                                <a
                                href={'https://toonyadraw.wordpress.com/'}
                                className="font-semibold text-[#FF9FAB]">
                                🖼️ art portfolio </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </TextScroll>
        </section>
    )
}