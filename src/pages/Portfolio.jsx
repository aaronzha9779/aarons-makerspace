import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { portfolioCategories, projects } from '../data/projects.js'

const coverColors = ['bg-[#354b4b]', 'bg-[#594335]', 'bg-[#3e3951]']

function ProjectCard({ project, index }) {
  return (
    <Link to={`/work/${project.slug}`} className="group relative min-h-[300px] overflow-hidden rounded-sm">
      {project.cover ? (
        <img src={project.cover} alt={project.title} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
      ) : (
        <div className={`absolute inset-0 ${coverColors[index % coverColors.length]}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="font-mono text-[10px] tracking-[0.16em] text-white/65">{project.idx} / {project.timeline}</p>
        <h2 className="mt-2 font-display text-2xl font-bold leading-tight">{project.title}</h2>
        <p className="mt-2 max-w-md text-sm text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          {project.caption || project.summary}
        </p>
      </div>
    </Link>
  )
}

export default function Portfolio() {
  return (
    <>
      <Nav />
      <main className="px-6 py-16 md:px-10 md:py-20">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs text-orange">SELECTED PROJECTS</p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">Portfolio</h1>
          <p className="mt-5 leading-relaxed text-inkdim">A working archive of things I build, draw, test, and put on the internet. Open any project for its purpose, creative process, specs, media, and timeline.</p>
        </div>

        <div className="space-y-20">
          {portfolioCategories.map((category) => {
            const categoryProjects = projects.filter((project) => project.category === category.id)
            return (
              <section key={category.id}>
                <div className="mb-6 flex flex-col justify-between gap-3 border-b border-rule pb-4 md:flex-row md:items-end">
                  <div>
                    <p className="font-mono text-xs tracking-[0.16em] text-orange">{category.id.toUpperCase()}</p>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">{category.title}</h2>
                  </div>
                  <p className="max-w-sm text-sm text-inkdim md:text-right">{category.description}</p>
                </div>
                {categoryProjects.length ? (
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {categoryProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
                  </div>
                ) : (
                  <div className="flex min-h-56 items-end border border-dashed border-rule bg-surface p-5 font-mono text-xs text-inkdim">
                    Add your {category.title.toLowerCase()} projects in <code className="ml-1 text-ink">src/data/projects.js</code>.
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
