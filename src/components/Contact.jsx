import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 scroll-mt-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-5">
          Building something, hiring, or got an idea?
        </h2>
        <p className="text-inkdim mb-8">
          Email me for any inquiries, creative or professional, and I'll get back to you super soon!
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block font-mono text-sm bg-ink text-bg px-5 py-3 rounded-sm hover:bg-orange transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </section>
  )
}
