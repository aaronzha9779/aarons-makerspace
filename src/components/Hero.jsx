import { profile } from '../data/profile.js'

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

      <h1 className="font-display font-bold text-[clamp(36px,6vw,72px)] leading-[1.05] tracking-tight max-w-3xl">
        {profile.tagline}
      </h1>

      <div className="flex flex-wrap items-center gap-4 mt-9">
        <a
          href="/#work"
          className="font-mono text-[13px] bg-orange text-white px-4 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          See the work
        </a>
        <a
          href="/#about"
          className="font-mono text-[13px] text-inkdim hover:text-ink transition-colors"
        >
          Read the statement &rarr;
        </a>
      </div>

      <div className="hidden md:block absolute right-10 bottom-8 font-mono text-[11px] text-inkdim text-right leading-loose">
        {profile.location.toUpperCase()}
        <br />
        REV 04 &mdash; 2026
      </div>
    </section>
  )
}
