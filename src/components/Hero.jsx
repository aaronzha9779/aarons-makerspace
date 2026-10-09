import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import Sketchbook from './Sketchbook.jsx'

export default function Hero() {
  return (
    <section className="relative px-6 md:px-10 pt-20 pb-20 border-b border-rule overflow-hidden">
      <div className="flex flex-wrap gap-2 mb-7">
        {profile.roles.map((role) => (
          <span
            key={role}
            className="font-mono text-[12px] tracking-wide border border-rule text-inkdim px-2.5 py-1 rounded-sm"
          >
            {role}
          </span>
        ))}
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:gap-16">
        <div>
          <h1 className="max-w-3xl font-display text-[clamp(36px,6vw,72px)] font-bold leading-[1.05] tracking-tight">
            {profile.tagline}
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="rounded-sm bg-orange px-4 py-2.5 font-mono text-[13px] text-white transition-opacity hover:opacity-90"
            >
              See the work
            </Link>
            <Link
              to="/about"
              className="font-mono text-[13px] text-inkdim transition-colors hover:text-ink"
            >
              about me &rarr;
            </Link>
          </div>
        </div>
        <Sketchbook />
      </div>

      <div className="hidden md:block absolute right-10 bottom-8 font-mono text-[11px] text-inkdim text-right leading-loose">
        {profile.location.toUpperCase()}
        <br />
        
      </div>
    </section>
  )
}
