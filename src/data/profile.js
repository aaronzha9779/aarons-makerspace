export const profile = {
  name: 'Aarons makerspace',
  initials: 'AZ',

  logoUrl: `${import.meta.env.BASE_URL}assets/AZlogo.png`,
  roles: ['Artist', 'Engineer', 'Designer', 'Student @ UMich'],
  tagline: 'I solve problems and create to serve the soul.',
  location: 'Chicago, IL | Ann Arbor, MI',

  statementProfessional:
    'Im currently a fourth year Robotics student at the University of Michigan with a focus in embedded systems and usability design. My works span across engineering, design, and visual art which I often fuse together. I\u2019ve been drawing and tinkering since I was 3 years old, and my love for creating comes from my desire to turn intangibles into tangibles. Outside of engineering and art, I also love to train mixed martial arts, practice calisthenics, and play piano. My lifelong dream is to make things and tell stories that inspire others to create and improve lives.',
  statementPersonal:
    '',

  // Public assets must include Vite's configured base path when deployed to GitHub Pages.
  resumeUrl: `${import.meta.env.BASE_URL}assets/Aaron_ZhangResume.pdf`,
  resumeLogoUrl: `${import.meta.env.BASE_URL}assets/Resume_Logo.png`,
  email: 'aaronzha@umich.edu',

  socials: [
    { label: 'GitHub', url: 'https://github.com/aaronzha9779', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aaron-zhang-813023344/', icon: 'linkedin' },
    { label: 'Instagram', url: 'https://instagram.com/aaron_zhang7', icon: 'instagram' },
  ],
}
