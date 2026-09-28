import { useState } from 'react'
import { experience } from '../data/experience.js'

function ExperienceGallery({ items, role }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const galleryItems = items.filter((item) => item.src)

  if (galleryItems.length === 0) {
    return (
      <div className="ml-auto flex h-52 w-full max-w-xl items-end border border-dashed border-rule bg-surface p-4">
        <span className="font-mono text-[11px] text-inkdim">Add images for this experience</span>
      </div>
    )
  }

  return (
    <div className="relative ml-auto h-52 w-full max-w-xl" aria-label={`${role} image gallery`}>
      {galleryItems.map((item, index) => {
        const isActive = index === activeIndex
        const rightOffset = (galleryItems.length - index - 1) * 88

        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={isActive}
            aria-label={`Show ${item.label}`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            style={{ right: `${rightOffset}px`, zIndex: isActive ? galleryItems.length + 1 : index + 1 }}
            className={`absolute inset-y-0 overflow-hidden rounded-sm border border-rule text-left shadow-sm transition-[width,transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
              isActive ? 'w-72 md:w-96' : 'w-36 md:w-44'
            }`}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                aria-label={item.label}
                className="size-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={item.src} alt={item.label} className="size-full object-cover" />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="border-b border-rule px-6 py-20 md:px-10">
      <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">Experience</h2>
      <div className="mt-10">
        {experience.map((role) => (
          <article key={role.id} className="grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr),minmax(420px,0.9fr)] lg:items-center lg:gap-16">
            <div className="max-w-2xl">
              <div className="font-mono text-[12px] text-inkdim">{role.dates}</div>
              <h3 className="mt-3 font-display text-lg font-medium">
                {role.role} <span className="font-normal text-inkdim">&middot; {role.org}</span>
              </h3>
              <p className="mt-1.5 text-sm text-inkdim">{role.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={skill} className="rounded-sm border border-rule px-2 py-1 font-mono text-[10.5px] text-inkdim">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <ExperienceGallery items={role.gallery} role={role.role} />
          </article>
        ))}
      </div>
    </section>
  )
}
