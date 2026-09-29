// Work / research history. Add a new role by copying an object below.
// Add gallery media to public/assets/experience/, then set each item's `src`.
// Image example: { src: `${import.meta.env.BASE_URL}assets/experience/test-rig.jpg`, caption: 'A short description' }
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
      { id: 'exp-01-frame-01', label: 'T1', src: `${import.meta.env.BASE_URL}assets/T1.png`, caption: 'lego spikeprime workshop ideation', },
      { id: 'exp-01-frame-02', label: 'T2', src: `${import.meta.env.BASE_URL}assets/T2.jpeg`, caption: 'tutoring session', },
      { id: 'exp-01-frame-03', label: 'T3', type: 'video', src: `${import.meta.env.BASE_URL}assets/T3.MOV`,  caption: 'self-driving lego car demo', },
      { id: 'exp-01-frame-04', label: 'T4', type: 'video', src: `${import.meta.env.BASE_URL}assets/T4.MOV`, caption: 'robo-dog demo', },
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
      { id: 'exp-02-frame-01', label: 'R1', src: `${import.meta.env.BASE_URL}assets/R1.jpeg`, caption: 'self-driving lego car demo',},
      { id: 'exp-02-frame-02', label: 'R2', src: `${import.meta.env.BASE_URL}assets/R2.jpeg`, caption: 'self-driving lego car demo',},
      { id: 'exp-02-frame-03', label: 'R3', src: `${import.meta.env.BASE_URL}assets/R3.jpeg`, caption: 'self-driving lego car demo',},
      { id: 'exp-02-frame-04', label: 'R4', type: 'video', src: `${import.meta.env.BASE_URL}assets/R4.MOV`, caption: 'self-driving lego car demo',},
      { id: 'exp-02-frame-05', label: 'R5', src: `${import.meta.env.BASE_URL}assets/R5.jpeg` },
      { id: 'exp-02-frame-06', label: 'R6', src: `${import.meta.env.BASE_URL}assets/R6.jpeg` },
      { id: 'exp-02-frame-07', label: 'R7', src: `${import.meta.env.BASE_URL}assets/R7.jpeg` },
      { id: 'exp-02-frame-08', label: 'R8', src: `${import.meta.env.BASE_URL}assets/R8.jpeg` },
      { id: 'exp-02-frame-09', label: 'R9', type: 'video', src: `${import.meta.env.BASE_URL}assets/R9.MOV` },
      { id: 'exp-02-frame-10', label: 'R10', src: `${import.meta.env.BASE_URL}assets/R10.jpeg` },
      { id: 'exp-02-frame-11', label: 'R11', src: `${import.meta.env.BASE_URL}assets/R11.jpeg` },
      { id: 'exp-02-frame-12', label: 'R12', type: 'video', src: `${import.meta.env.BASE_URL}assets/R12.MOV` },
    ],
  },
]
