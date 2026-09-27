// ── EDIT ME FIRST ──────────────────────────────────────────────────────────
// This one file drives the hero, nav, footer, and contact section.

export const profile = {
  name: 'Your Name',
  initials: 'YN',
  roles: ['Designer', 'Engineer', 'Artist', 'Student @ UMich'],
  tagline: 'I build systems that move \u2014 and paint the things that don\u2019t need to.',
  location: 'Ann Arbor, MI',

  // One or two short paragraphs. This is your "why," not a resume rehash.
  statementProfessional:
    'I\u2019m a mechanical/embedded engineer who treats hardware like a sketch that gets iterated in metal and code instead of graphite. Most of what I build starts as a rough drawing before it ever becomes a CAD file.',
  statementPersonal:
    'Outside of coursework and projects, I paint, play piano, and train \u2014 the same instinct that wants a circuit to be elegant wants a composition to be balanced. I don\u2019t see these as separate hobbies from engineering; they\u2019re the same eye applied to different materials.',

  resumeUrl: '/assets/resume.pdf', // replace this file in public/assets
  email: 'you@example.com',

  socials: [
    { label: 'GitHub', url: 'https://github.com/yourhandle', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle', icon: 'linkedin' },
    { label: 'Instagram', url: 'https://instagram.com/yourhandle', icon: 'instagram' },
  ],
}
