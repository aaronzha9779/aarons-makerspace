import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { SocialIcon } from './Icons.jsx'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center gap-6 px-6 md:px-10 py-6 border-b border-rule bg-bg/90 backdrop-blur sticky top-0 z-30">
      <Link to="/" className="font-display font-bold text-lg tracking-tight shrink-0">
        {profile.name}
        <span className="text-orange">.</span>
      </Link>

      <ul className="hidden md:flex gap-7 font-mono text-[13px] text-inkdim">
        <li>
          <a href="/#work" className="hover:text-ink transition-colors">work</a>
        </li>
        <li>
          <Link to="/work" className="hover:text-ink transition-colors">portfolio</Link>
        </li>
        <li>
          <a href="/#about" className="hover:text-ink transition-colors">about</a>
        </li>
        <li>
          <a href="/#contact" className="hover:text-ink transition-colors">contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
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
          className="font-mono text-[12.5px] border border-ink px-3.5 py-2 rounded-sm hover:bg-ink hover:text-bg transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
