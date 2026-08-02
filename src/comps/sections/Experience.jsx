import { TextScroll } from "../TextScroll"
import { Timeline } from "../Timeline"
import { SectionHeading } from "../SectionHeading"
import { TreePine, Sprout, Bug } from "lucide-react"

export const Experience = () => {
    const experience = [
        {
            role: "SWE Intern - Consumer Technology",
            company: "Wells Fargo",
            start: "2026",
            end: "2026",
            description: "Built agentic AI workflow with orchestrated subagents and dynamic UI for accelerated data delivery"
        },
        {
            role: "SWE Intern",
            company: "TechSur Solutions",
            start: "2025",
            end: "2025",
            description: "Developed food safety iOS app with ingredient scanning, user health reports, and real-time FDA recall tracking"
        },
        {
            role: "Research Assistant",
            company: "Cornell Comp Ling Lab",
            start: "2025",
            end: "2025",
            description: "Implemented NLP pipelines to syntactically parse open-source language corpus on HPC systems"
        },
        {
            role: "Course Staff - CS 4300, INFO 2950, CS 1110",
            company: "Cornell Bowers CIS",
            start: "2024",
            end: "Present",
            description: "Lead labs and mentor 100+ students each semester through data science and NLP coursework and final projects"
        },
        {
            role: "Software Subteam",
            company: "Cornell Mars Rover",
            start: "2023",
            end: "2025",
            description: "Engineered autonomous navigation, birds-eye camera, and controls dashboard for semi-autonomous rover team"
        },
        {
            role: "Asymmetric Operations Intern",
            company: "JHU APL",
            start: "2022",
            end: "2022",
            description: "Designed a Neo4j-powered cybersecurity dashboard for adoption by Asymmetric Operations Systems team"
        },
    ]
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-36">
            <TextScroll>
                <div className="max-w-5xl mx-auto px-4">
                <SectionHeading icon={TreePine} variant="sway">experience</SectionHeading>

                <div className="glass rounded-xl p-8 border border-[#D06224]/10 shadow-[0_4px_30px_rgba(255,255,255,0.05)]
                hover:-translate-y-1 transition-all relative overflow-hidden mb-6">
                    <SectionHeading size="md" icon={Sprout} variant="grow">Education</SectionHeading>
                    <p className="text-gray-300 text-md">
                    <strong className="text-[#EAC891]">B.A. in CS, Minor in Linguistics</strong> — Cornell University (Aug 2023 – Dec 2026)
                    <br/>
                    Relevant Coursework: Data Structures & Functional Programming, Algorithms, Machine Learning, Data Science, Language & Information, Syntax & Semantics, Operating Systems, Engineering Project Teams, Linear Algebra, Probability Models
                    </p>
                </div>

                <div className="glass rounded-xl p-8 border border-[#D06224]/10 shadow-[0_4px_30px_rgba(255,255,255,0.05)]
                hover:-translate-y-1 transition-all relative overflow-hidden">
                    <SectionHeading size="md" icon={Bug} variant="scurry">Work Experience</SectionHeading>
                    <Timeline items={experience} />
                </div>

                </div>
            </TextScroll>
        </section>
    )
}
