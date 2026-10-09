import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  const usesGalleryLayout = project?.slug === 'cardboard-creations'
  const specs = Object.entries(project?.specs || {})
  const hasTimeline = project?.timeline && project.timeline !== '—'

  useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/20 p-4 backdrop-blur-2xl md:p-8"
      onMouseDown={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-bg shadow-[0_30px_80px_rgba(18,18,18,0.28)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex size-9 items-center justify-center rounded-full border border-rule bg-bg/90 font-mono text-lg text-inkdim transition-colors hover:border-orange hover:text-orange md:right-8 md:top-8"
          aria-label="Close project preview"
        >
          ×
        </button>

        <div className="overflow-y-auto px-6 pb-10 pt-16 md:px-12 md:pb-14 md:pt-20">
          <div className="mb-10 max-w-3xl">
            <h2 id="project-modal-title" className="font-display text-4xl font-bold leading-none tracking-tight md:text-6xl">
              {project.title}
            </h2>
            {project.summary && <p className="mt-5 max-w-2xl leading-relaxed text-inkdim">{project.summary}</p>}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-mono text-xs underline underline-offset-4 transition-colors hover:text-orange"
              >
                {project.linkLabel || 'View project'} ↗
              </a>
            )}
          </div>

          {project.tags?.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-sm border border-rule px-3 py-1.5 font-mono text-xs text-inkdim">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {specs.length > 0 && (
            <div className="mb-10 max-w-sm border-t border-rule pt-6 font-mono text-sm">
              {specs.map(([label, value]) => (
                <div key={label} className="mb-2.5 flex justify-between text-inkdim">
                  <span>{label}</span>
                  <b className="font-normal text-orange">{value}</b>
                </div>
              ))}
            </div>
          )}

          {project.category !== 'visual-art' && project.summary && (
            <section className="mb-10 max-w-prose">
              <h3 className="font-mono text-xs text-orange">PURPOSE</h3>
              <p className="mt-3 leading-relaxed text-inkdim">{project.purpose || project.summary}</p>
            </section>
          )}

          {hasTimeline && (
            <section className="mb-10 max-w-prose">
              <h3 className="font-mono text-xs text-orange">TIMELINE</h3>
              <p className="mt-3 leading-relaxed text-inkdim">{project.timeline}</p>
            </section>
          )}

          {project.notes && (
            <section className="mb-10 max-w-prose">
              <h3 className="font-mono text-xs text-orange">CREATIVE PROCESS</h3>
              <p className="mt-3 leading-relaxed text-inkdim">{project.process || project.notes}</p>
            </section>
          )}

          {project.media?.length > 0 && (
            <div className={usesGalleryLayout ? 'mx-auto max-w-4xl columns-1 gap-4 sm:columns-2 lg:columns-3' : 'mx-auto max-w-3xl space-y-5'}>
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
                      <figcaption className="mt-2 min-h-6 text-sm leading-relaxed text-inkdim">
                        {media.caption}
                      </figcaption>
                    ))}
                  </figure>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
