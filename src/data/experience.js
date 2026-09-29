// Work / research history. Add a new role by copying an object below.
// Add gallery media to public/assets/experience/, then set each item's `src`.
// Image example: { src: `${import.meta.env.BASE_URL}assets/experience/test-rig.jpg`, caption: 'A short description' }
// Video example: { id: 'clip', label: 'Test run', type: 'video', src: `${import.meta.env.BASE_URL}assets/experience/test-run.mp4` }

export const experience = [
  {
    id: 'exp-01',
    role: 'STEM Instructor',
    org: 'Themelios Education',
    dates: 'June 2025 — August 2025',
    desc: 'Led hands-on robotics workshops for 50+ students from grades 8 - 12, using Lego SpikePrime Robotics. I taught the basics of sensors, motor control, programming, and helped curate curiosity in engineering as a future career. I also led academic tutoring sessions to grades 6 - 8. ',
    skills: ['Sensor I/O', 'Python', 'Motor Control', 'Public Speaking', 'Mentoring', 'Tutoring'],
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
    dates: 'May 2024 - September 2024',
    desc: 'Repaired and maintained a fleet of service robots for real clients, diagnosing hardware and software issues, mapping robots at new sites, and running live demos.',
    skills: ['Hardware Diagnostics', 'Software Troubleshooting', 'RMS Teleoperation', 'Robot localization and mapping', 'Cross-Technical Communication'],
    gallery: [
      { id: 'exp-02-frame-01', label: 'R1', src: `${import.meta.env.BASE_URL}assets/R1.jpeg`, },
      { id: 'exp-02-frame-02', label: 'R2', src: `${import.meta.env.BASE_URL}assets/R2.jpeg`, caption: 'mapping + localization setup for client',},
      { id: 'exp-02-frame-03', label: 'R3', src: `${import.meta.env.BASE_URL}assets/R3.jpeg`, },
      { id: 'exp-02-frame-04', label: 'R4', type: 'video', src: `${import.meta.env.BASE_URL}assets/R4.MOV`, caption: 'BellaBot delivery test run and calibration',},
      { id: 'exp-02-frame-05', label: 'R5', src: `${import.meta.env.BASE_URL}assets/R5.jpeg`, caption: 'hardware check and screen replacement',},
      { id: 'exp-02-frame-06', label: 'R6', src: `${import.meta.env.BASE_URL}assets/R6.jpeg`, caption: 'robot delivery for client',},
      { id: 'exp-02-frame-07', label: 'R7', src: `${import.meta.env.BASE_URL}assets/R7.jpeg`, },
      { id: 'exp-02-frame-08', label: 'R8', src: `${import.meta.env.BASE_URL}assets/R8.jpeg`, },
      { id: 'exp-02-frame-09', label: 'R9', type: 'video', src: `${import.meta.env.BASE_URL}assets/R9.MOV`, caption: 'IFT first robot demo and talks',},
      { id: 'exp-02-frame-10', label: 'R10', src: `${import.meta.env.BASE_URL}assets/R10.jpeg` },
      { id: 'exp-02-frame-11', label: 'R11', src: `${import.meta.env.BASE_URL}assets/R11.jpeg` },
      { id: 'exp-02-frame-12', label: 'R12', type: 'video', src: `${import.meta.env.BASE_URL}assets/R12.MOV` },
    ],
  },
]
