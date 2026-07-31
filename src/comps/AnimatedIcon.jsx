import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)

const variants = {
    scurry: (el) => gsap.timeline({ paused: true })
        .to(el, { x: -4, rotate: -8, duration: 0.06, ease: "power1.out" })
        .to(el, { x: 4, rotate: 8, duration: 0.09, ease: "power1.inOut" })
        .to(el, { x: -3, rotate: -5, duration: 0.08, ease: "power1.inOut" })
        .to(el, { x: 0, rotate: 0, duration: 0.08, ease: "power1.out" }),

    grow: (el) => gsap.timeline({ paused: true })
        .to(el, { scale: 1.25, y: -3, duration: 0.35, ease: "back.out(3)" })
        .to(el, { scale: 1, y: 0, duration: 0.45, ease: "elastic.out(1,0.4)" }),

    flap: (el) => gsap.timeline({ paused: true })
        .to(el, { y: -6, rotate: -10, duration: 0.15, ease: "power2.out" })
        .to(el, { y: 0, rotate: 6, duration: 0.15, ease: "power1.inOut" })
        .to(el, { rotate: 0, duration: 0.15, ease: "power1.out" }),

    rustle: (el) => gsap.timeline({ paused: true })
        .to(el, { rotate: 10, duration: 0.08, ease: "power1.out" })
        .to(el, { rotate: -8, duration: 0.1, ease: "power1.inOut" })
        .to(el, { rotate: 5, duration: 0.08, ease: "power1.inOut" })
        .to(el, { rotate: 0, duration: 0.08, ease: "power1.out" }),

    launch: (el) => gsap.timeline({ paused: true })
        .to(el, { y: -7, scale: 1.15, duration: 0.2, ease: "power3.out" })
        .to(el, { y: 0, scale: 1, duration: 0.3, ease: "bounce.out" }),

    sway: (el) => gsap.timeline({ paused: true })
        .to(el, { rotate: 9, duration: 0.35, ease: "sine.inOut", transformOrigin: "bottom center" })
        .to(el, { rotate: -7, duration: 0.45, ease: "sine.inOut" })
        .to(el, { rotate: 0, duration: 0.35, ease: "sine.inOut" }),

    pop: (el) => gsap.timeline({ paused: true })
        .to(el, { scale: 1.2, rotate: 8, duration: 0.2, ease: "back.out(4)" })
        .to(el, { scale: 1, rotate: 0, duration: 0.25, ease: "power2.out" }),
}

export const AnimatedIcon = ({ icon, variant = "pop", size = 20, className = "" }) => {
    const Icon = icon
    const ref = useRef(null)
    const timelineRef = useRef(null)

    useGSAP(() => {
        timelineRef.current = variants[variant](ref.current)
    }, [variant])

    return (
        <span
            ref={ref}
            className={`inline-flex ${className}`}
            onMouseEnter={() => timelineRef.current?.restart()}
        >
            <Icon size={size} />
        </span>
    )
}
