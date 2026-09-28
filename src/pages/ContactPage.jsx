import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { profile } from '../data/profile.js'
import { SocialIcon } from '../components/Icons.jsx'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.35fr,0.65fr] gap-14 lg:gap-24 max-w-6xl">
          <section>
            <div className="font-mono text-xs text-orange mb-8">02 / CONTACT</div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-2xl">
              Start with a good question.
            </h1>
            <p className="text-inkdim leading-relaxed max-w-xl mt-8">
              For collaborations, project conversations, or a thoughtful note, email is the best place to start.
              Include a little context and I&apos;ll get back to you soon.
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
                <span>Resume</span>
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
