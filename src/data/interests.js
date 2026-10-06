// Skills shown on the About page. `group` controls the column where each skill appears.

export const interests = [
  {
    slug: 'embedded-systems',
    label: 'Embedded systems',
    group: 'engineering',
    depth: 'Firmware, control loops, and the boards underneath them.',
  },
  {
    slug: 'cad-fabrication',
    label: 'CAD + fabrication',
    group: 'engineering',
    depth: 'Design-for-manufacture, from FDM prototypes to machined final parts.',
  },
  {
    slug: 'calisthenics',
    label: 'Calisthenics',
    group: 'misc',
    depth: 'Load, leverage, and progression \u2014 mechanics applied to a body instead of a frame.',
  },
  {
    slug: 'painting',
    label: 'Painting',
    group: 'art',
    depth: 'Mostly oil and gouache studies; color and value before detail.',
  },
  {
    slug: 'piano',
    label: 'Piano',
    group: 'misc',
    depth: 'Classical training, now mostly improvisation and slow pieces.',
  },
  {
    slug: 'writing',
    label: 'Writing',
    group: 'misc',
    depth: 'Long-form notes and essays \u2014 thinking in public before it\u2019s finished.',
  },
]

export const supplementalImages = [
  {
    src: `${import.meta.env.BASE_URL}assets/T1.png`,
    alt: 'LEGO components and builds',
  },
  {
    src: `${import.meta.env.BASE_URL}assets/T2.jpeg`,
    alt: 'Teaching at a whiteboard',
  },
]
