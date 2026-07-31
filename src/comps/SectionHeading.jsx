import { AnimatedIcon } from "./AnimatedIcon"

export const SectionHeading = ({ children, size = "lg", icon: Icon, variant = "pop" }) => {
    const textSize = size === "lg" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
    const iconSize = size === "lg" ? 28 : 22
    const marginBottom = size === "lg" ? "mb-12" : "mb-6"
    return (
        <div className={`flex items-center gap-2 sm:gap-3 min-w-0 ${marginBottom}`}>
            {Icon && <AnimatedIcon icon={Icon} variant={variant} size={iconSize} className="text-[#8A8635] shrink-0" />}
            <h2 className={`${textSize} font-bold text-[#D06224]`}>
                {children}
            </h2>
            <span className="flex-1 min-w-4 h-px bg-gradient-to-r from-[#8A8635]/50 via-[#8A8635]/15 to-transparent ml-2 sm:ml-3"></span>
        </div>
    )
}
