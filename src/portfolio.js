const header = {
  homepage: 'https://jheckel-dev.github.io/cautious-fortnight/',
  title: 'JH.',
}

const about = {
  name: 'Jalen Heckel',
  role: 'Full Stack Developer',
  description:
    'After many years in sales and customer service I have embarked on recent career change to pivot toward web and application development! Here you will find a few of my recent works as part of the 24 week UW Coding Bootcamp.',
  resume: '',
  social: {
    linkedin: 'https://linkedin.com/in/jalen-heckel-20327b169',
    github: 'https://github.com/jheckel-dev',
  },
}

const projects = [
  // projects can be added an removed
  {
    name: 'Halloween RSVP',
    description:
      'An application meant to be an app where invitees to a party can share their costume, a snack they are bringing, and make a song request for a halloween party.',
    stack: ['HandleBars', 'SQL', ''],
    sourceCode: 'https://github.com/jheckel-dev/halloween-rsvp',
    Picture: 'src/img/Screen Shot 2021-10-01 at 10.03.15 AM.png',
  },
  {
    name: 'Forget Me Nots',
    description:
      'A simple note taking application using express.js to persistently store notes on local storage.',
    stack: ['JavaScript', 'Express.js', ''],
    sourceCode: 'https://https://github.com/jheckel-dev/forget-me-nots.com',
    livePreview: 'https://ghttps://github.com/jheckel-dev/forget-me-nots/blob/main/Assets/ezgif-6-9337a735ed12.gifithub.com',
  },
  {
    name: 'E-Commerce Back End',
    description:
      'The backend for an online shopping retailer where items can be added, removed, and updated using JSON input form the user.',
    stack: ['SQL', 'JavaScript', 'API'],
    sourceCode: 'https://https://github.com/jheckel-dev/E-Commerce-Back-End.com',
    livePreview: 'https://githttps://github.com/jheckel-dev/E-Commerce-Back-End/blob/main/Screen-Recording-2021-11-18-at-3.04.50-PM.gifhub.com',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Material UI',
  'GitHub',
  'Jest',
  'APIs',
  'NodeJS',
  'Express',
  'SQL',
  'NoSQL',
  'MERN'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jalen.heckel@icloud.com',
}

export { header, about, projects, skills, contact }
