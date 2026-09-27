import { interests } from '../data/interests.js'

function Column({ label, accent, items }) {
  return (
    <div className="flex-1 min-w-[240px]">
      <div className="font-mono text-xs text-inkdim mb-5">{label}</div>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.slug} className="border-l-2 pl-4" style={{ borderColor: accent }}>
            <div className="font-display font-medium text-lg">{item.label}</div>
            <p className="text-inkdim text-sm mt-1 max-w-sm">{item.depth}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Interests() {
  const eng = interests.filter((i) => i.group === 'engineering')
  const art = interests.filter((i) => i.group === 'art')

  return (
    <section className="px-6 md:px-10 py-20 border-b border-rule">
      <h2 className="font-display font-bold text-2xl md:text-3xl max-w-lg mb-12">
        Two concentrations, one way of looking at things.
      </h2>
      <div className="flex flex-col md:flex-row gap-14 md:gap-10">
        <Column label="Engineering" accent="#121212" items={eng} />
        <Column label="Art" accent="#E8551D" items={art} />
      </div>
    </section>
  )
}
