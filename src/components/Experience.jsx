import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="px-6 md:px-10 py-20 border-b border-rule">
      <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16">
        <div className="font-mono text-xs text-inkdim">Experience</div>
        <div className="space-y-10 max-w-2xl">
          {experience.map((role) => (
            <div key={role.id} className="grid sm:grid-cols-[120px,1fr] gap-2 sm:gap-6">
              <div className="font-mono text-[12px] text-inkdim">{role.dates}</div>
              <div>
                <h3 className="font-display font-medium text-lg">
                  {role.role} <span className="text-inkdim font-normal">&middot; {role.org}</span>
                </h3>
                <p className="text-inkdim text-sm mt-1.5">{role.desc}</p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {role.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10.5px] text-inkdim border border-rule px-2 py-1 rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {role.image && (
                  <img src={role.image} alt="" className="mt-4 rounded-sm max-w-sm" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
