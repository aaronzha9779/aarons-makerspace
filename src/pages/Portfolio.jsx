import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { portfolioCategories, projects } from '../data/projects.js'

const coverColors = ['bg-[#354b4b]', 'bg-[#594335]', 'bg-[#3e3951]']

function ProjectCard({ project, index }) {
  return (
    <Link to={`/work/${project.slug}`} className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-md">
      {project.cover ? (
        <img
          src={project.cover}
          alt={project.title}
          className="block h-auto w-full transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`aspect-[4/3] ${coverColors[index % coverColors.length]}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h2 className="font-display text-2xl font-bold leading-tight">{project.title}</h2>
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
      <main className="mx-auto max-w-[1440px] px-8 py-16 md:px-16 md:py-20 xl:px-20">
        <div className="mb-16 max-w-2xl">
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">Portfolio</h1>
          <p className="mt-5 leading-relaxed text-inkdim">An active archive of the things I build, draw, test, and deploy, all in one space. Open any project for my whys, creative process, specs, media, and timeline.</p>
        </div>

        <div className="space-y-20">
          {portfolioCategories.map((category) => {
            const categoryProjects = projects.filter((project) => project.category === category.id)
            return (
              <section key={category.id} className="border-t-2 border-ink pt-5">
                <div className="mb-6">
                  <p className="font-mono text-xs tracking-[0.16em] text-orange">{category.id.toUpperCase()}</p>
                </div>
                {categoryProjects.length ? (
                  <div className="columns-1 gap-4 md:columns-2 xl:columns-4">
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
