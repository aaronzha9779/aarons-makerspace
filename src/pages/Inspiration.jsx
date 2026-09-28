import Nav from '../components/Nav.jsx'
import { inspirationItems } from '../data/inspiration.js'

const sizes = {
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2',
  tall: 'row-span-2',
  standard: '',
}

export default function Inspiration() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#090909] px-4 py-10 text-white md:px-10 md:py-14">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/20 pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange">Field notes / 01</p>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-7xl">Inspiration</h1>
          </div>
          <p className="max-w-sm font-mono text-xs leading-relaxed text-white/60">
            A growing index of images, objects, colors, and systems I keep returning to.
          </p>
        </div>

        <section className="grid auto-rows-[120px] grid-cols-2 gap-2 md:auto-rows-[150px] md:grid-cols-5 md:gap-3" aria-label="Inspiration moodboard">
          {inspirationItems.map((item, index) => (
            <article key={item.title} className={`group relative overflow-hidden ${sizes[item.size]}`}>
              {item.image ? (
                <img src={item.image} alt={item.title} className="size-full object-cover transition duration-500 group-hover:scale-105" />
              ) : (
                <div className={`flex size-full flex-col justify-between p-3 ${item.tone}`}>
                  <span className="font-mono text-[10px] text-white/60">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-display text-xl font-bold leading-none md:text-2xl">{item.title}</p>
                    <p className="mt-1 font-mono text-[10px] text-white/65">{item.note}</p>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 border border-white/10 transition group-hover:border-orange" />
            </article>
          ))}
        </section>

        <p className="mt-8 font-mono text-[11px] leading-relaxed text-white/45">
          Add your own images in <code>public/assets/inspiration/</code>, then connect them in <code>src/data/inspiration.js</code>.
        </p>
      </main>
    </>
  )
}
