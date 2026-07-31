import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)

const petalAngles = [0, 72, 144, 216, 288]

export const FlowerDrawing = ({ className = "", color = "#EAC891" }) => {
    const svgRef = useRef(null)

    useGSAP(() => {
        const paths = svgRef.current.querySelectorAll("path")
        paths.forEach((path) => {
            const length = path.getTotalLength()
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        })
        gsap.to(paths, {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.15,
            delay: 0.3,
        })
    }, [])

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 64 80"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M30,78 C28,65 34,55 32,40" />
            <path d="M31,58 C20,53 15,60 12,56 C16,48 26,50 31,58 Z" />
            <path d="M32,48 C42,42 48,48 52,44 C48,37 38,40 32,48 Z" />
            {petalAngles.map((angle) => (
                <path
                    key={angle}
                    d="M0,0 C-6,-8 -6,-18 0,-24 C6,-18 6,-8 0,0 Z"
                    transform={`translate(32,24) rotate(${angle})`}
                />
            ))}
            <path d="M28,24 A4,4 0 1,1 36,24 A4,4 0 1,1 28,24" />
        </svg>
    )
}
