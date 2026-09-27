import { profile } from '../data/profile.js'
import { SocialIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 scroll-mt-20">
      <div className="max-w-xl">
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-5">
          Building something, hiring, or just want to talk shop?
        </h2>
        <p className="text-inkdim mb-8">
          The fastest way to reach me is email &mdash; I read everything and reply to most of it.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block font-mono text-sm bg-ink text-bg px-5 py-3 rounded-sm hover:bg-orange transition-colors"
        >
          {profile.email}
        </a>
        <div className="flex items-center gap-4 mt-8 text-inkdim">
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
    </section>
  )
}
