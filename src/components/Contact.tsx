"use client";

import { motion } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMarker, setErrorMarker] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMarker(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const err = await res.json();
                setErrorMarker(err.error || "Something went wrong.");
            }
        } catch (err) {
            setErrorMarker("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center">
                        <Mail className="w-8 h-8 text-pcb-trace mr-3" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pcb-muted">
                            Initiate Transmission
                        </span>
                    </h2>
                    <p className="text-pcb-muted text-lg max-w-xl mx-auto">
                        Ready to collaborate on a new hardware venture? Send a signal and let's route the next big idea.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-pcb-surface border border-pcb-border p-8 md:p-12 rounded-xl relative overflow-hidden shadow-2xl"
                >
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <CheckCircle className="w-16 h-16 text-pcb-trace mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-2">Transmission Successful</h3>
                            <p className="text-pcb-muted">Signal acknowledged. I'll respond to your query shortly.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-8 text-pcb-trace hover:underline text-sm font-mono"
                            >
                                Send another message /&gt;
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-mono text-pcb-muted">NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-pcb-bg border border-pcb-border rounded px-4 py-3 text-white focus:outline-none focus:border-pcb-trace focus:ring-1 focus:ring-pcb-trace transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono text-pcb-muted">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-pcb-bg border border-pcb-border rounded px-4 py-3 text-white focus:outline-none focus:border-pcb-trace focus:ring-1 focus:ring-pcb-trace transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono text-pcb-muted">PAYLOAD</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-pcb-bg border border-pcb-border rounded px-4 py-3 text-white focus:outline-none focus:border-pcb-trace focus:ring-1 focus:ring-pcb-trace transition-all resize-none"
                                    placeholder="Describe your project requirements..."
                                ></textarea>
                            </div>

                            {errorMarker && (
                                <div className="text-red-400 text-sm font-mono bg-red-400/10 border border-red-400/20 p-3 rounded">
                                    ERR: {errorMarker}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-pcb-trace text-pcb-bg font-bold py-4 rounded hover:bg-white hover:text-black transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        TRANSMITTING...
                                    </>
                                ) : (
                                    <>
                                        EXECUTE TRANSMISSION
                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
