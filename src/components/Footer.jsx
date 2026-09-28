import { profile } from '../data/profile.js'
import { SocialIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 md:px-10 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 font-mono text-[11px] text-inkdim">
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
    </footer>
  )
}
