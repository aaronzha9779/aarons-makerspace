// Work / research history. Add a new role by copying an object below.
// Add gallery media to public/assets/experience/, then set each item's `src`.
// Image example: src: `${import.meta.env.BASE_URL}assets/experience/test-rig.jpg`
// Video example: { id: 'clip', label: 'Test run', type: 'video', src: `${import.meta.env.BASE_URL}assets/experience/test-run.mp4` }

export const experience = [
  {
    id: 'exp-01',
    role: 'Placeholder Role Title',
    org: 'Placeholder Company or Lab',
    dates: '2025 — Present',
    desc: 'One or two sentences on what you actually did and shipped, written plainly — not a resume bullet fragment.',
    skills: ['CAD', 'Python', 'Controls'],
    gallery: [
      { id: 'exp-01-frame-01', label: 'Build log', src: null },
      { id: 'exp-01-frame-02', label: 'In the lab', src: null },
      { id: 'exp-01-frame-03', label: 'Detail study', src: null },
    ],
  },
  {
    id: 'exp-02',
    role: 'Robotics Technician',
    org: 'Rutech Robotics',
    dates: 'May - September 2024',
    desc: 'What the team was trying to solve, and the specific piece that was yours.',
    skills: ['SolidWorks', 'Data acquisition'],
    gallery: [
      { id: 'exp-02-frame-01', label: 'Prototype', src: boxes.jpg },
      { id: 'exp-02-frame-02', label: 'Testing', src: null },
      { id: 'exp-02-frame-03', label: 'Process', src: null },
    ],
  },
]
