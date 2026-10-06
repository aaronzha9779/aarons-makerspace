import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const specs = Object.entries(project?.specs || {})
  const hasTimeline = project?.timeline && project.timeline !== '—'
  const usesGalleryLayout = project?.slug === 'cardboard-creations'

  if (!project) {
    return (
      <>
        <Nav />
        <div className="px-6 md:px-10 py-24">
          <p className="text-inkdim">Project not found.</p>
          <Link to="/work" className="text-orange font-mono text-sm">
            &larr; back to portfolio
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <div className="px-6 md:px-10 py-16 max-w-3xl">
        <Link to="/work" className="font-mono text-xs text-inkdim hover:text-orange transition-colors">
          &larr; back to portfolio
        </Link>

        <h1 className="mt-8 mb-4 font-display text-4xl font-bold md:text-5xl">{project.title}</h1>
        <p className="text-inkdim text-base max-w-xl mb-4">{project.summary}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-mono text-[12.5px] underline underline-offset-4 hover:text-orange mb-6"
          >
            {project.linkLabel || 'View repo / writeup'}
          </a>
        )}

        <div className="flex gap-2 flex-wrap mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-sm border border-rule px-3 py-1.5 font-mono text-xs text-inkdim">
              {tag}
            </span>
          ))}
        </div>

        {specs.length > 0 && (
          <div className="border-t border-rule pt-6 font-mono text-sm max-w-sm mb-10">
            {specs.map(([label, value]) => (
              <div key={label} className="flex justify-between text-inkdim mb-2.5">
                <span>{label}</span>
                <b className="text-orange font-normal">{value}</b>
              </div>
            ))}
          </div>
        )}

        <section className="mb-10 max-w-prose">
          <h2 className="font-mono text-xs text-orange">PURPOSE</h2>
          <p className="mt-3 leading-relaxed text-inkdim">{project.purpose || project.summary}</p>
        </section>

        {hasTimeline && (
          <section className="mb-10 max-w-prose">
            <h2 className="font-mono text-xs text-orange">TIMELINE</h2>
            <p className="mt-3 leading-relaxed text-inkdim">{project.timeline}</p>
          </section>
        )}

        {project.notes && (
          <section className="mb-10 max-w-prose">
            <h2 className="font-mono text-xs text-orange">CREATIVE PROCESS</h2>
            <p className="mt-3 leading-relaxed text-inkdim">{project.process || project.notes}</p>
          </section>
        )}

        {project.media?.length > 0 && (
          <section>
            <h2 className="font-mono text-xs text-orange">MEDIA</h2>
            <div className={usesGalleryLayout ? 'mt-5 columns-1 gap-4 sm:columns-2' : 'mt-5 space-y-5'}>
              {project.media.map((media) => (
                media.type === 'video'
                  ? <video key={media.src} src={media.src} controls className={`w-full rounded-md ${usesGalleryLayout ? 'mb-4 break-inside-avoid' : ''}`} />
                  : <img key={media.src} src={media.src} alt="" className={`w-full rounded-md ${usesGalleryLayout ? 'mb-4 break-inside-avoid' : ''}`} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}
