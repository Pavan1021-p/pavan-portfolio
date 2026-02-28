import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
