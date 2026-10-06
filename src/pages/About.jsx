import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Interests from '../components/Interests.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 md:px-10 py-16 md:py-24 border-b border-rule">
          <div className="grid gap-8 md:grid-cols-[0.55fr,1.2fr,0.75fr] md:gap-8">
            <div className="font-mono text-xs text-orange">01 / ABOUT</div>
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-inkdim mb-5">{profile.location}</p>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight">
                Engineer in mind.<br />Artist at heart.
              </h1>
              <div className="mt-10 space-y-5 text-inkdim leading-relaxed max-w-prose">
                <p>{profile.statementProfessional}</p>
                <p>{profile.statementPersonal}</p>
              </div>
            </div>
            <div className="w-full max-w-xs md:justify-self-start">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}assets/portrait.png`}
                  alt={`Portrait of ${profile.name}`}
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-inkdim">aaron zhang 2026</p>
            </div>
          </div>
        </section>
        <Interests />
        <section className="border-b border-rule px-6 py-10 md:px-10">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs text-orange">INSPIRATION</p>
              <p className="mt-2 text-sm text-inkdim">Curious what inspires me? check out my collection of ideas, media, references, and things that keep me creating.</p>
            </div>
            <a
              href="https://aaronzha9779.github.io/inspiration-site/#top"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 border border-ink px-4 py-2 font-mono text-xs transition-colors hover:border-orange hover:bg-orange hover:text-white"
            >
              visit inspiration site ↗
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
