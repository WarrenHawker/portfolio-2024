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
];
