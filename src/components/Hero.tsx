"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Cpu } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background PCB Grid pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#00ff41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center space-x-2 bg-pcb-surface border border-pcb-border px-3 py-1 rounded-full text-xs font-mono text-pcb-trace">
                        <span className="w-2 h-2 rounded-full bg-pcb-trace animate-pulse" />
                        <span>Hardware Engineer @ Einfochips, An Arrow Company</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                        Hi, I'm <span className="text-pcb-trace">Pavan Jethva</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-pcb-muted mb-6">
                        Electronics Hardware Engineer
                    </h2>
                    <p className="text-lg text-pcb-muted/80 max-w-lg leading-relaxed">
                        Designing robust embedded systems, efficient power architectures, and next-generation hardware solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="bg-pcb-trace text-pcb-bg px-6 py-3 rounded hover:bg-white hover:text-black transition-all font-semibold flex items-center group">
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="border border-pcb-border bg-pcb-surface hover:border-pcb-trace text-white px-6 py-3 rounded transition-all font-medium flex items-center">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:flex justify-center"
                >
                    {/* Conceptual Hardware illustration */}
                    <div className="relative w-80 h-80 rounded-full border border-pcb-border flex items-center justify-center p-8 bg-pcb-surface/30 backdrop-blur-sm shadow-[0_0_50px_rgba(0,255,65,0.1)]">
                        <div className="absolute inset-0 rounded-full border border-pcb-trace/30 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border border-pcb-trace/10 animate-[spin_15s_linear_infinite_reverse]" />
                        <Cpu className="w-32 h-32 text-pcb-trace drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]" />
                        {/* Fake connection lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                            <motion.path
                                d="M 50 20 L 50 10 L 80 10"
                                fill="none"
                                stroke="#00ff41"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                            <motion.path
                                d="M 20 50 L 10 50 L 10 20"
                                fill="none"
                                stroke="#00ff41"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pcb-muted"
            >
                <a href="#about" aria-label="Scroll down">
                    <ChevronDown className="w-6 h-6 hover:text-pcb-trace transition-colors" />
                </a>
            </motion.div>
        </section>
    );
}
