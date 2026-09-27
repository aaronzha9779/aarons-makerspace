import { profile } from '../data/profile.js'

export default function Statement() {
  return (
    <section id="about" className="px-6 md:px-10 py-20 border-b border-rule scroll-mt-20">
      <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16">
        <div className="font-mono text-xs text-inkdim">Statement</div>
        <div className="max-w-prose space-y-6">
          <p className="font-display text-xl md:text-2xl leading-snug">
            {profile.statementProfessional}
          </p>
          <p className="text-inkdim leading-relaxed">{profile.statementPersonal}</p>
        </div>
      </div>
    </section>
  )
}
