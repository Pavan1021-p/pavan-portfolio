"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "RENESAS MCU Embedded System",
        description: "Spearheaded the schematic design and peripheral interfacing for a reliable embedded system. Successfully managed complex board bring-up and firmware validation processes to ensure robust operation in industrial environments.",
        tags: ["RENESAS MCU", "Schematic Design", "Board Bring-up"]
    },
    {
        title: "Realtek MCU Implementation",
        description: "Designed a high-throughput networking solution by integrating Realtek networking ICs. Focused significantly on optimizing power lines to deliver stable performance under heavy load conditions.",
        tags: ["Realtek ICs", "Power Optimization", "Networking Architecture"]
    },
    {
        title: "STM MP235 MPU Architecture",
        description: "Navigated the complexity of microprocessor design with high-speed memory routing. Managed strict power distribution network (PDN) constraints to maintain signal integrity across multi-layer PCBs.",
        tags: ["STM MPU", "High-Speed Routing", "Signal Integrity", "PDN"]
    },
    {
        title: "Low-Power Battery Operated Device",
        description: "Engineered a compact, battery-operated IoT device focusing heavily on power budget calculations. Maximized battery life through advanced sleep mode optimization and selective component power-gating.",
        tags: ["Low-Power Design", "IoT", "Power Budgeting"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-pcb-surface/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
                        <FolderGit2 className="w-8 h-8 text-pcb-trace mr-3" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pcb-muted">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-pcb-trace to-transparent opacity-30 mt-6" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-pcb-bg border border-pcb-border hover:border-pcb-trace rounded-xl p-8 group transition-all"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-white group-hover:text-pcb-trace transition-colors">
                                    {project.title}
                                </h3>
                                <a href="#" className="p-2 border border-pcb-border rounded-full hover:bg-pcb-trace hover:text-pcb-bg transition-colors text-pcb-muted hidden md:block">
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                            <p className="text-pcb-muted mb-8 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-pcb-surface border border-pcb-border rounded-full text-pcb-trace/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
