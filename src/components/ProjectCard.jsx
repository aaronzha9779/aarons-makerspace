import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const fallbackTones = ['bg-[#354b4b]', 'bg-[#594335]', 'bg-[#3e3951]']
  const fallbackTone = fallbackTones[Number(project.idx?.replace(/\D/g, '')) % fallbackTones.length]

  return (
    <div className="bg-bg hover:bg-surface transition-colors p-7">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div className={`relative mb-5 aspect-video overflow-hidden rounded-sm ${project.cover ? 'bg-surface' : fallbackTone}`}>
          {project.cover ? (
            <img src={project.cover} alt="" className="size-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-end p-4">
              <span className="font-mono text-xs tracking-[0.16em] text-white/70">{project.idx}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between items-start">
          <div className="font-mono text-xs text-orange">{project.idx}</div>
          <span className="font-mono text-xs text-inkdim">{open ? '\u2212' : '+'}</span>
        </div>
        <h3 className="font-display font-medium text-xl mt-3 mb-2.5">{project.title}</h3>
        <p className="text-inkdim text-sm mb-5">{project.summary}</p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10.5px] text-inkdim border border-rule px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>

      {open && (
        <div className="border-t border-dashed border-rule mt-5 pt-4">
          <div className="font-mono text-[11.5px] mb-4">
            {Object.entries(project.specs).map(([label, value]) => (
              <div key={label} className="flex justify-between text-inkdim mb-1.5">
                <span>{label}</span>
                <b className="text-orange font-normal">{value}</b>
              </div>
            ))}
          </div>
          {project.notes && (
            <p className="text-inkdim text-sm leading-relaxed mb-4">{project.notes}</p>
          )}
          <Link
            to={`/work/${project.slug}`}
            className="font-mono text-[12px] text-ink underline underline-offset-4 hover:text-orange"
          >
            Full writeup
          </Link>
        </div>
      )}
    </div>
  )
}
