import { Link } from 'react-router-dom'

const fallbackTones = ['bg-[#354b4b]', 'bg-[#594335]', 'bg-[#3e3951]']

export default function ProjectCard({ project }) {
  const fallbackTone = fallbackTones[Number(project.idx?.replace(/\D/g, '')) % fallbackTones.length]
  const caption = project.caption || project.title

  return (
    <Link
      to={`/work/${project.slug}`}
      aria-label={`Read the full ${project.title} project writeup`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-sm"
    >
      {project.cover ? (
        <img
          src={project.cover}
          alt=""
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`size-full ${fallbackTone}`} aria-hidden="true" />
      )}

      <div className="absolute inset-0 flex items-end bg-black/65 p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="text-sm leading-relaxed text-white">{caption}</p>
      </div>
    </Link>
  )
}
