import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { SocialIcon } from './Icons.jsx'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center gap-4 px-4 py-3 md:gap-6 md:px-10 md:py-4 border-b border-rule bg-bg/90 backdrop-blur sticky top-0 z-30">
      <Link to="/" className="flex min-w-0 flex-1 items-center gap-2 md:gap-3 font-display font-bold text-lg tracking-tight">
        {profile.logoUrl ? (
          <img
            src={profile.logoUrl}
            alt={`${profile.name} logo`}
            className="relative -top-1 size-14 shrink-0 rounded-sm object-contain md:size-16"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-rule font-mono text-xs text-inkdim md:size-14"
          >
            {profile.initials}
          </span>
        )}
        <span className="truncate">
          {profile.name}
          <span className="text-orange">.</span>
        </span>
      </Link>

      <ul className="hidden lg:flex gap-6 font-mono text-[13px] text-inkdim">
        <li>
          <Link to="/#work" className="hover:text-ink transition-colors">work</Link>
        </li>
        <li>
          <Link to="/work" className="hover:text-ink transition-colors">portfolio</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-ink transition-colors">about</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-ink transition-colors">contact</Link>
        </li>
        <li>
          <Link to="/inspiration" className="hover:text-ink transition-colors">inspiration</Link>
        </li>
      </ul>

      <div className="flex shrink-0 items-center gap-4 md:ml-10">
        <div className="hidden sm:flex items-center gap-3 text-inkdim">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="hover:text-orange transition-colors"
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[12.5px] border border-ink px-2.5 py-2 rounded-sm hover:bg-ink hover:text-bg transition-colors md:px-3.5"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
