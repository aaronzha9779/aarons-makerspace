import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { profile } from '../data/profile.js'
import { SocialIcon } from '../components/Icons.jsx'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.35fr,0.65fr] lg:gap-24">
          <section>
            <div className="font-mono text-xs text-orange mb-8">02 / CONTACT</div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-2xl">
              got a good question? 
            </h1>
            <p className="text-inkdim leading-relaxed max-w-xl mt-8">
              For collaborations, project ideas, or technical questions, reach out. I never let a good idea slip away. 
              Include a little context, a hint of curiosity, and I&apos;ll be sure to get back to you soon.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 mt-10 font-mono text-sm bg-ink text-bg px-5 py-3 rounded-sm hover:bg-orange transition-colors"
            >
              {profile.email} <span aria-hidden="true">&rarr;</span>
            </a>
          </section>

          <aside className="border-t-2 border-ink pt-5 lg:mt-10">
            <p className="font-mono text-xs text-inkdim">OTHER PLACES</p>
            <div className="mt-5 space-y-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-rule py-3 text-sm hover:text-orange transition-colors"
              >
                <span className="flex items-center gap-3">
                  <img src={profile.resumeLogoUrl} alt="" className="h-6 w-6 object-contain" />
                  Resume
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-rule py-3 text-sm hover:text-orange transition-colors"
                >
                  <span className="flex items-center gap-3"><SocialIcon icon={social.icon} />{social.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="mt-10 font-mono text-xs text-inkdim leading-relaxed">
              <div>BASED IN</div>
              <div className="text-ink mt-1">{profile.location}</div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
