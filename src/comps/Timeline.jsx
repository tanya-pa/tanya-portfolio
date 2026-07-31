import { Leaf } from "lucide-react"
import { AnimatedIcon } from "./AnimatedIcon"

export const Timeline = ({ items }) => {
    return (
        <div className="relative pl-8 space-y-10 border-l-2 border-[#8A8635]/40">
            {items.map((item, key) => (
                <div key={key} className="relative">
                    <span className="absolute -left-[calc(2rem+9px)] top-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#1C1512]">
                        <AnimatedIcon icon={Leaf} variant="rustle" size={14} className="text-[#8A8635]" />
                    </span>
                    <p className="text-sm text-[#B5B15E] font-mono uppercase tracking-wide mb-1">{item.start} — {item.end}</p>
                    <h4 className="text-lg font-bold text-white">
                        {item.role} <span className="text-[#EAC891]">@ {item.company}</span>
                    </h4>
                    <p className="text-gray-400 text-md mt-1">{item.description}</p>
                </div>
            ))}
        </div>
    )
}
