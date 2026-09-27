import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'

export default function Portfolio() {
  return (
    <>
      <Nav />
      <div className="px-6 md:px-10 py-16">
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">Full portfolio</h1>
        <p className="text-inkdim mb-12 max-w-prose">
          Every project, with the timeline it happened on. Click through for specs, notes, and media.
        </p>

        <div className="divide-y divide-rule border-t border-b border-rule">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="grid md:grid-cols-[80px,1fr,180px] gap-2 md:gap-8 items-start py-7 group"
            >
              <div className="font-mono text-xs text-orange">{p.idx}</div>
              <div>
                <h2 className="font-display font-medium text-xl group-hover:text-orange transition-colors">
                  {p.title}
                </h2>
                <p className="text-inkdim text-sm mt-1.5 max-w-lg">{p.caption || p.summary}</p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10.5px] text-inkdim border border-rule px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="font-mono text-xs text-inkdim md:text-right">{p.timeline}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
