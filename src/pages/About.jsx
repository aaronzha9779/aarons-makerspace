import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Experience from '../components/Experience.jsx'
import Interests from '../components/Interests.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 md:px-10 py-16 md:py-24 border-b border-rule">
          <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16">
            <div className="font-mono text-xs text-orange">01 / ABOUT</div>
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-inkdim mb-5">{profile.location}</p>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight">
                Engineer by practice.<br />Artist by instinct.
              </h1>
              <div className="mt-10 space-y-5 text-inkdim leading-relaxed max-w-prose">
                <p>{profile.statementProfessional}</p>
                <p>{profile.statementPersonal}</p>
              </div>
            </div>
          </div>
        </section>
        <Interests />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
