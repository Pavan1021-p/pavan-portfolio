import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pavan Jethva | Electronics Hardware Engineer',
    description: 'Designing robust embedded systems, efficient power architectures, and next-generation hardware solutions.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-pcb-bg text-pcb-text min-h-screen antialiased`}>
                <div className="flex flex-col min-h-screen">
                    <nav className="border-b border-pcb-border bg-pcb-surface/80 backdrop-blur-md sticky top-0 z-50">
                        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                            <span className="text-xl font-bold tracking-tighter cursor-pointer text-pcb-trace glow-text">Pavan.</span>
                            <ul className="flex space-x-6 text-sm font-medium">
                                <li><a href="#about" className="hover:text-pcb-trace transition-colors">About</a></li>
                                <li><a href="#skills" className="hover:text-pcb-trace transition-colors">Skills</a></li>
                                <li><a href="#projects" className="hover:text-pcb-trace transition-colors">Projects</a></li>
                                <li><a href="#contact" className="hover:text-pcb-trace transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <main className="flex-grow">
                        {children}
                    </main>
                    <footer className="border-t border-pcb-border py-8 text-center text-pcb-muted text-sm">
                        <p>© {new Date().getFullYear()} Pavan Jethva. All rights reserved.</p>
                    </footer>
                </div>
            </body>
        </html>
    )
}
