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
      <div className={`px-6 md:px-10 py-16 ${usesGalleryLayout ? 'max-w-6xl' : 'max-w-3xl'}`}>
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

        {project.category !== 'visual-art' && (
          <section className="mb-10 max-w-prose">
            <h2 className="font-mono text-xs text-orange">PURPOSE</h2>
            <p className="mt-3 leading-relaxed text-inkdim">{project.purpose || project.summary}</p>
          </section>
        )}

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
            <div className={usesGalleryLayout ? 'columns-1 gap-4 sm:columns-2 lg:columns-3' : 'space-y-5'}>
              {project.media.map((media) => {
                const hasCaptionSlot = Object.hasOwn(media, 'caption')
                const mediaClassName = `w-full rounded-md ${usesGalleryLayout ? 'break-inside-avoid' : ''}`

                return (
                  <figure key={media.src} className={usesGalleryLayout ? 'group relative mb-4 break-inside-avoid' : ''}>
                    {media.type === 'video'
                      ? <video src={media.src} controls className={mediaClassName} />
                      : (
                        <div className={media.zoom ? 'overflow-hidden rounded-md' : ''}>
                          <img
                            src={media.src}
                            alt={media.alt || ''}
                            className={`${mediaClassName} ${media.zoom === 1.5 ? 'scale-150' : media.zoom === 0.75 ? 'scale-75' : ''}`}
                          />
                        </div>
                      )}
                    {hasCaptionSlot && (usesGalleryLayout ? (
                      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-4 pt-10 font-mono text-xs leading-relaxed text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {media.caption}
                      </figcaption>
                    ) : (
                      <figcaption className="min-h-6 mt-2 text-sm leading-relaxed text-inkdim">
                        {media.caption}
                      </figcaption>
                    ))}
                  </figure>
                )
              })}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}
