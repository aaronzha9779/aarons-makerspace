import { useState } from 'react'
import { experience } from '../data/experience.js'

function ExperienceGallery({ items, role }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const galleryItems = items.filter((item) => item.src)
  const expandedItem = expandedIndex === null ? null : galleryItems[expandedIndex]

  if (galleryItems.length === 0) {
    return (
      <div className="ml-auto flex h-80 w-full items-end border border-dashed border-rule bg-surface p-4">
        <span className="font-mono text-[11px] text-inkdim">Add images for this experience</span>
      </div>
    )
  }

  return (
    <>
      <div className="ml-auto flex h-80 w-full gap-2" aria-label={`${role} image gallery`}>
        {galleryItems.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              aria-label={`Expand ${item.label}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setExpandedIndex(index)}
              className={`group relative min-w-0 overflow-hidden rounded-sm border border-rule text-left shadow-sm transition-[flex-grow] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                isActive ? 'flex-[3]' : 'flex-1'
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
              {item.caption && (
                <span className="absolute inset-x-0 bottom-0 bg-black/75 px-3 py-2 font-mono text-[11px] leading-snug text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.caption}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {expandedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={expandedItem.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setExpandedIndex(null)}
        >
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setExpandedIndex(null)}
              className="absolute right-3 top-3 z-10 rounded-sm bg-black/70 px-3 py-2 font-mono text-xs text-white hover:bg-orange"
            >
              Close
            </button>
            {expandedItem.type === 'video' ? (
              <video src={expandedItem.src} className="max-h-[85vh] max-w-full rounded-sm" autoPlay loop muted playsInline controls />
            ) : (
              <img src={expandedItem.src} alt={expandedItem.label} className="max-h-[85vh] max-w-full rounded-sm object-contain" />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default function Experience() {
  return (
    <section className="border-b border-rule px-6 py-20 md:px-10">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Experience</h2>
      <div className="mt-5 divide-y divide-rule">
        {experience.map((role) => (
          <article key={role.id} className="grid gap-8 py-8 first:pt-0 lg:grid-cols-[minmax(0,0.9fr),minmax(560px,1.2fr)] lg:items-center lg:gap-10">
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
