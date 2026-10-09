const fallbackTones = ['bg-[#354b4b]', 'bg-[#594335]', 'bg-[#3e3951]']

export default function ProjectCard({ project }) {
  const fallbackTone = fallbackTones[Number(project.idx?.replace(/\D/g, '')) % fallbackTones.length]
  const caption = project.caption || project.title

  return (
    <button
      type="button"
      onClick={() => project.onOpen?.(project)}
      aria-label={`Open ${project.title} project preview`}
      aria-haspopup="dialog"
      className="group relative block aspect-[4/3] overflow-hidden rounded-md"
    >
      {project.cover ? (
        project.coverType === 'video' ? (
          <video
            src={project.cover}
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={project.cover}
            alt=""
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        )
      ) : (
        <div className={`size-full ${fallbackTone}`} aria-hidden="true" />
      )}

      <div className="absolute inset-0 flex items-end bg-black/65 p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div>
          <h3 className="font-display text-xl font-bold leading-tight text-white">{project.title}</h3>
          <p className="mt-2 font-mono text-sm leading-relaxed text-white/85">{caption}</p>
        </div>
      </div>
    </button>
  )
}
