import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Experience from '../components/Experience.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <Nav />
      <Hero />

      <section id="work" className="px-6 md:px-10 py-20 border-b border-rule scroll-mt-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl">Selected work</h2>
          <Link
            to="/work"
            className="font-mono text-xs text-inkdim hover:text-orange transition-colors"
          >
            full portfolio &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px bg-rule border border-rule">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
