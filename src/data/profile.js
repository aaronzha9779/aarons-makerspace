export const profile = {
  name: 'Aarons makerspace',
  initials: 'AZ',

  logoUrl: `${import.meta.env.BASE_URL}assets/AZlogo.png`,
  roles: ['Artist', 'Engineer', 'Designer', 'Student @ UMich'],
  tagline: 'I solve problems and create to serve the soul.',
  location: 'Chicago, IL | Ann Arbor, MI',

  statementProfessional:
    'I\u2019m a mechanical/embedded engineer who treats hardware like a sketch that gets iterated in metal and code instead of graphite. Most of what I build starts as a rough drawing before it ever becomes a CAD file.',
  statementPersonal:
    'Outside of coursework and projects, I paint, play piano, and train \u2014 the same instinct that wants a circuit to be elegant wants a composition to be balanced. I don\u2019t see these as separate hobbies from engineering; they\u2019re the same eye applied to different materials.',

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
