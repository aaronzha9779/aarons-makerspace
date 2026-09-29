// Add a new project by copying an object below. Nothing else needs to change —
// the homepage grid, the full portfolio page, and the detail pages all read
// from this array automatically.

export const portfolioCategories = [
  { id: 'engineering', title: 'Engineering', description: 'Systems, hardware, and experiments built to be tested.' },
  { id: 'visual-art', title: 'Visual Art', description: 'Paintings, studies, and visual investigations.' },
  { id: 'apps', title: 'Apps', description: 'Digital tools, interfaces, and small internet artifacts.' },
]

// Home page pins: change this list to choose and order the work shown in
// the "Selected work" section. Use project slugs from the array below.
export const selectedProjectSlugs = [
  'flight-controller',
  'gimbal',
  'regen-braking-rig',
]

export const projects = [
  {
    slug: 'flight-controller',
    idx: 'P-01',
    category: 'engineering',
    // Optional card image. Its natural aspect ratio is preserved in the portfolio gallery.
    cover: null,
    title: 'Autonomous flight controller',
    summary: 'Custom PID-tuned flight controller for a 900g quadcopter, built on a bare STM32.',
    caption: 'Bare-metal firmware, no flight-stack shortcuts.',
    timeline: 'Jan \u2014 Apr 2026',
    link: null, // e.g. GitHub repo or writeup URL
    tags: ['Embedded', 'Controls'],
    specs: {
      'Flight time': '22 min',
      'Weight': '890 g',
      'Loop rate': '1 kHz',
    },
    notes:
      'Started as a hand sketch of the frame before any electronics were chosen. The hardest part wasn\u2019t the control loop \u2014 it was getting the IMU mounted rigidly enough that vibration didn\u2019t alias into the gyro readings.',
    media: [
      // { type: 'image', src: '/assets/fc-1.jpg' },
      // { type: 'video', src: '/assets/fc-demo.mp4' },
    ],
  },
  {
    slug: 'gimbal',
    idx: 'P-02',
    category: 'engineering',
    cover: null,
    title: 'Modular 3-axis gimbal',
    summary: 'Camera stabilization rig with brushless direct-drive motors and a custom IMU fusion filter.',
    caption: 'Direct-drive, no gearing to introduce backlash.',
    timeline: 'Sep \u2014 Dec 2025',
    link: null,
    tags: ['CAD', 'Motors'],
    specs: {
      'Payload': '1.2 kg',
      'Drift': '<0.05\u00b0/min',
      'Print time': '14 hr',
    },
    notes:
      'Went through four printed housings before the wall thickness stopped resonating at motor commutation frequency. That failure mode doesn\u2019t show up in simulation \u2014 only on the bench.',
    media: [],
  },
  {
    slug: 'regen-braking-rig',
    idx: 'P-03',
    category: 'engineering',
    cover: null,
    title: 'Regen braking test rig',
    summary: 'Benchtop dynamometer for validating regenerative braking efficiency on small EV drivetrains.',
    caption: 'Built to answer one question: where does the energy actually go.',
    timeline: 'May \u2014 Jul 2025',
    link: null,
    tags: ['Power', 'Data'],
    specs: {
      'Peak recovery': '68%',
      'Torque range': '0-40 Nm',
      'Sample rate': '2 kHz',
    },
    notes:
      'Most of the build time went into instrumentation, not the mechanical rig \u2014 a dyno is only as good as its sensor calibration.',
    media: [],
  },
]
