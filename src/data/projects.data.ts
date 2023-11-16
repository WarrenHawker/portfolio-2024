import { ProjectData } from '../types/projects.type';
import neilColeyImg1 from '/images/screenshots/neil-coley-1.png';

export const Projects: ProjectData[] = [
  {
    title: 'Jazz Band Website',
    technologies: ['Nextjs', 'Typescript', 'Contentful'],
    description: `<p>A local Jazz Band was struggling to get gigs and enough viewers for those gigs to break even. 
    Their previous website was very outdated and wasn't generating the traffic they needed, 
    so they commissioned me to make a new one.</p>
    <p>Their new site looks a lot more modern whilst maintaining their identity as a band, 
    resulting in them getting more gigs and viewers. The new site is also much easier to 
    keep updated thanks to Contentful CMS, which lets the band leaders quickly upload new gigs, 
    news posts and videos, as well as change any of the text on the site without needing to code anything.</p>
    `,
    images: [neilColeyImg1],
    deploymentUrl: 'https://neilcoleyband.co.uk/',
    githubUrl: 'https://github.com/WarrenHawker/neil-coley-band',
    isCommission: true,
  },
  {
    title: 'Swimhub API',
    technologies: ['Expressjs', 'Typescript', 'MongoDB', 'PostgreSQL'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://swimhub-api-docs.netlify.app/',
    githubUrl: 'https://github.com/Swimhub-project/swimhub-api',
    isCommission: false,
  },
  {
    title: 'Anime Recommendations',
    technologies: ['Reactjs'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://anime-recommendations.netlify.app/',
    githubUrl: 'https://github.com/WarrenHawker/anime-recommendations-app',
    isCommission: false,
  },
  {
    title: 'Lifeguard Quiz',
    technologies: ['Reactjs'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://nplq-quiz.netlify.app/',
    githubUrl: 'https://github.com/WarrenHawker/lifeguard-quiz-app',
    isCommission: false,
  },
  {
    title: 'BooleBots',
    technologies: ['Reactjs', 'Typescript'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://gentle-semifreddo-84c257.netlify.app/',
    githubUrl: 'https://github.com/chingu-voyages/v44-tier2-team-27',
    isCommission: false,
  },
  {
    title: 'Artist Website',
    technologies: ['Nextjs', 'Contentful'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://carole-website-contentful.vercel.app/',
    githubUrl: 'https://github.com/WarrenHawker/carole-website-contentful',
    isCommission: true,
  },
  {
    title: 'Expenses Tracker',
    technologies: ['Expressjs', 'Reactjs', 'MongoDB', 'Typescript'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://food-expenses.netlify.app/',
    githubUrl: 'https://github.com/WarrenHawker/food-expenses-tracker',
    isCommission: false,
  },
  {
    title: 'Diving Club Website',
    technologies: ['Wordpress'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://www.twdiving.co.uk/',
    githubUrl: 'https://github.com/WarrenHawker/tunbridge-wells-diving-custom',
    isCommission: true,
  },
  {
    title: 'Performance Rope Group Website',
    technologies: ['Wordpress'],
    description: `<p></p>`,
    images: [],
    deploymentUrl: 'https://brightonrope.co.uk/',
    githubUrl: 'https://github.com/WarrenHawker/BrightonRope2022',
    isCommission: true,
  },
];
