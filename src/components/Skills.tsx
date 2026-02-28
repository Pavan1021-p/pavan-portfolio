"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Wifi, TerminalSquare, Layout, PenTool } from "lucide-react";

const skillCategories = [
    {
        title: "Core EDA Tools",
        icon: <PenTool className="w-6 h-6 text-pcb-trace" />,
        skills: ["Altium Designer", "OrCAD Capture"]
    },
    {
        title: "Hardware Engineering",
        icon: <Layout className="w-6 h-6 text-pcb-trace" />,
        skills: [
            "Schematic Design",
            "Power Budget Calculation",
            "PCB Layout & Routing",
            "Component Selection & BOM",
            "Signal Integrity Analysis"
        ]
    },
    {
        title: "Embedded Systems & IoT",
        icon: <Cpu className="w-6 h-6 text-pcb-trace" />,
        skills: [
            "Microcontroller / MPU Architectures",
            "Wi-Fi / Bluetooth Module Integration",
            "High-Throughput Live Feed Optimization",
            "Embedded C Concepts"
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative opacity-95">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
                        <Zap className="w-8 h-8 text-pcb-trace mr-3" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pcb-muted">
                            Technical Arsenal
                        </span>
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-pcb-trace to-transparent opacity-30 mt-6" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-pcb-surface border border-pcb-border rounded-xl p-8 hover:border-pcb-trace/50 transition-all group relative overflow-hidden"
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pcb-trace/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 bg-pcb-bg inline-flex p-3 rounded-lg border border-pcb-border">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                            <ul className="space-y-3 relative z-10">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-start">
                                        <span className="text-pcb-trace mr-2 mt-1 opacity-70">▹</span>
                                        <span className="text-pcb-muted hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
