import { profile } from '../data/profile.js'
import { SocialIcon } from './Icons.jsx'
import ColorToggle from './ColorToggle.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 pt-4 pb-4 md:px-10 md:pt-5 md:pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-mono text-[11px] text-inkdim">
      <div>
        <div>&copy; {profile.name} 2026 </div>
        <div className="flex items-center gap-3 mt-3">
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
      </div>
      <ColorToggle />
    </footer>
  )
}
