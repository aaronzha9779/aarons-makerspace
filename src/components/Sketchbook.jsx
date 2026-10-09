import { useState } from 'react'
import { sketchbookPages } from '../data/sketchbook.js'

export default function Sketchbook() {
  const [pageIndex, setPageIndex] = useState(0)
  const page = sketchbookPages[pageIndex]

  const changePage = (direction) => {
    setPageIndex((currentIndex) => (currentIndex + direction + sketchbookPages.length) % sketchbookPages.length)
  }

  return (
    <section aria-label="Sketchbook" className="relative mx-auto w-full max-w-md lg:max-w-lg lg:-translate-x-16 xl:-translate-x-24">
      <div className="relative flex items-center justify-center">
        <img
          src={page.src}
          alt=""
          aria-hidden="true"
          className="absolute size-4/5 scale-110 object-cover opacity-25 blur-3xl"
        />
        <button
          type="button"
          onClick={() => changePage(-1)}
          aria-label="Previous sketchbook page"
          className="absolute left-0 z-10 flex size-10 items-center justify-center rounded-full border border-rule bg-bg/90 font-mono text-lg transition-colors hover:border-orange hover:text-orange"
        >
          ←
        </button>
        <figure className="relative w-[80%] -rotate-2 overflow-hidden rounded-[1.4rem] border border-[#d6c9b4] bg-gradient-to-br from-[#fffdf8] via-[#f2eadf] to-[#dfd2bd] p-3 shadow-[0_20px_45px_-20px_rgba(51,39,23,0.55)] transition-transform duration-300 hover:rotate-0 sm:p-4">
          <div className="relative overflow-hidden rounded-[0.9rem] border border-[#dfd4c3] bg-[#eee4d3]">
            <img key={page.src} src={page.src} alt={page.alt} className="aspect-[4/3] w-full object-contain" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#806a51]/45 shadow-[-4px_0_8px_rgba(91,71,45,0.22),4px_0_8px_rgba(255,255,255,0.45)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#5f4931]/10 to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[0.9rem] ring-1 ring-inset ring-white/35" />
          </div>
          <figcaption className="pt-3 text-center font-mono text-[10px] tracking-[0.14em] text-inkdim">
            {page.title.toUpperCase()}
          </figcaption>
        </figure>
        <button
          type="button"
          onClick={() => changePage(1)}
          aria-label="Next sketchbook page"
          className="absolute right-0 z-10 flex size-10 items-center justify-center rounded-full border border-rule bg-bg/90 font-mono text-lg transition-colors hover:border-orange hover:text-orange"
        >
          →
        </button>
      </div>
      <p className="mt-4 text-center font-mono text-[10px] tracking-[0.12em] text-inkdim" aria-live="polite">
        {pageIndex + 1} / {sketchbookPages.length}
      </p>
    </section>
  )
}
