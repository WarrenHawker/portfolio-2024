import { ProjectData } from '../types/projects.type';
import neilcoley1 from '/images/screenshots/neilcoley1.webp';
import neilcoley2 from '/images/screenshots/neilcoley2.webp';
import neilcoley3 from '/images/screenshots/neilcoley3.webp';
import portfolio1 from '/images/screenshots/portfolio1.webp';
import portfolio2 from '/images/screenshots/portfolio2.webp';
import portfolio3 from '/images/screenshots/portfolio2.webp';
import swimhub1 from '/images/screenshots/swimhub1.webp';
import swimhub2 from '/images/screenshots/swimhub2.webp';
import swimhub3 from '/images/screenshots/swimhub3.webp';
import anime1 from '/images/screenshots/anime1.webp';
import anime2 from '/images/screenshots/anime2.webp';
import anime3 from '/images/screenshots/anime3.webp';
import lifeguard1 from '/images/screenshots/lifeguard1.webp';
import lifeguard2 from '/images/screenshots/lifeguard2.webp';
import lifeguard3 from '/images/screenshots/lifeguard3.webp';
import boolebots1 from '/images/screenshots/boolebots1.webp';
import boolebots2 from '/images/screenshots/boolebots2.webp';
import boolebots3 from '/images/screenshots/boolebots3.webp';
import artist1 from '/images/screenshots/artist1.webp';
import artist2 from '/images/screenshots/artist2.webp';
import artist3 from '/images/screenshots/artist3.webp';
import expenses1 from '/images/screenshots/expenses1.webp';
import expenses2 from '/images/screenshots/expenses2.webp';
import expenses3 from '/images/screenshots/expenses3.webp';
import diving1 from '/images/screenshots/diving1.webp';
import diving2 from '/images/screenshots/diving2.webp';
import diving3 from '/images/screenshots/diving3.webp';
import rope1 from '/images/screenshots/rope1.webp';
import rope2 from '/images/screenshots/rope2.webp';
import rope3 from '/images/screenshots/rope3.webp';

export const Projects: ProjectData[] = [
  {
    //portfolio
    title: 'Portfolio',
    technologies: ['Reactjs', 'Typescript'],
    description: `<p>My previous portfolio site was functional but didn't look very modern. 
    This version has up to date visuals and some new techniques I've learned such as smoother animations for page transitions and project filtering.</p>`,
    images: [portfolio2, portfolio1, portfolio3],
    deploymentUrl: 'https://warrenhawker.dev',
    githubUrl: 'https://github.com/WarrenHawker/portfolio-2024',
    isCommission: false,
  },
  {
    //jazz band
    title: 'Jazz Band Website',
    technologies: ['Nextjs', 'Typescript', 'Contentful'],
    description: `<p>A local Jazz Band was struggling to get gigs and enough viewers for those gigs to break even. 
    Their previous website was very outdated and wasn't generating the traffic they needed, 
    so they commissioned me to make a new one.</p>
    <p>Their new site looks a lot more modern whilst maintaining their identity as a band, 
    resulting in them getting more gigs, viewers and income. The new site is also much easier to 
    keep updated thanks to Contentful CMS, which lets the band leaders quickly upload new gigs, 
    news posts and videos, as well as change any of the text on the site without needing to code anything.</p>
    `,
    images: [neilcoley1, neilcoley2, neilcoley3],
    deploymentUrl: 'https://neilcoleyband.co.uk/',
    githubUrl: 'https://github.com/WarrenHawker/neil-coley-band',
    isCommission: true,
  },
  {
    //swimhub api
    title: 'Swimhub API',
    technologies: ['Expressjs', 'Typescript', 'MongoDB', 'PostgreSQL'],
    description: `<p>This API forms the backend of the Swimhub project - 
    Swimhub is designed to give swimming teachers a place to share tips and exercises for swimming lessons. 
    This is very much needed as there isn't yet a central platform for this and sharing such information during lessons is
    very impractical.</p>
    <p>The API is designed to give the frontend devs of the project everything they need to craft the actual Swimhub app. 
    The documentation (seen in the screenshots) has all the information they should need in a well laid out and understandable manner. 
    </p>
    `,
    images: [swimhub1, swimhub2, swimhub3],
    deploymentUrl: 'https://swimhub-api-docs.netlify.app/',
    githubUrl: 'https://github.com/Swimhub-project/swimhub-api',
    isCommission: false,
  },
  {
    //anime recommendations
    title: 'Anime Recommendations',
    technologies: ['Reactjs'],
    description: `<p>I got sick of scrolling through page after page of "top 10 anime" 
    recommendation lists looking for my next anime binge, and never finding a decent match. 
    So I created an app to help me. The app uses the Jikan API that gets information from the 
    MyAnimeList website.</p>

    <p>This project was the first time I've implemented page pagination, which was very 
    important because depending on the filter settings, you could receive thousands of results from the API.</p>`,
    images: [anime1, anime2, anime3],
    deploymentUrl: 'https://anime-recommendations.netlify.app/',
    githubUrl: 'https://github.com/WarrenHawker/anime-recommendations-app',
    isCommission: false,
  },
  {
    //lifeguard quiz
    title: 'Lifeguard Quiz',
    technologies: ['Reactjs'],
    description: `<p>In the UK Lifeguards have to renew their qualification every year. 
    To help them prepare, usually you'd need to print off mock question papers, which uses a lot of paper and is
    generally bad for the environment.</p>
    
    <p>Because of this, I created an app that has all the mock questions in it, allowing lifeguard candidates to 
    practice without wasting so much paper. The app also includes some additional features such as multiple quiz modes, 
    a built-in timer and detailed explanations of the questions the user gets wrong. </p>

    <p>I have noticed a considerable improvement in the knowledge of candidates that use the app over traditional paper
    tests, and as a result candidates usually get higher marks in the actual renewal paper.</p>
    `,
    images: [lifeguard1, lifeguard2, lifeguard3],
    deploymentUrl: 'https://nplq-quiz.netlify.app/',
    githubUrl: 'https://github.com/WarrenHawker/lifeguard-quiz-app',
    isCommission: false,
  },
  {
    //boolebots
    title: 'BooleBots',
    technologies: ['Reactjs', 'Typescript'],
    description: `<p>My first group project. We were tasked with creating a game for teaching 
    people how boolean operators work. The user configures up to 4 bots to do battle in an arena. 
    When one of the bots collides with another, their boolean operators and values are calculated to determine the winner.</p>
    <p>As this was my first time working with other people, it was initially a struggle because we all 
    had slightly different coding styles. We managed to overcome this though and I'm very happy with the end result.
    The project took us 6 weeks to complete.</p>`,
    images: [boolebots1, boolebots2, boolebots3],
    deploymentUrl: 'https://gentle-semifreddo-84c257.netlify.app/',
    githubUrl: 'https://github.com/chingu-voyages/v44-tier2-team-27',
    isCommission: false,
  },
  {
    //artist
    title: 'Artist Website',
    technologies: ['Nextjs', 'Contentful'],
    description: `<p>An independent artist was struggling to get commissions for their artwork, so they wanted a new website to 
    showcase their previous work and provide contact information for new clients.</p>
    
    <p>The client needed an easy way to upload new art pieces in the future so I used Contentful as the CMS. 
    The website also features a filtering system for the artwork and a contact form to make it easy for clients
    to connect with the artist.</p>`,
    images: [artist1, artist2, artist3],
    deploymentUrl: 'https://carole-website-contentful.vercel.app/',
    githubUrl: 'https://github.com/WarrenHawker/carole-website-contentful',
    isCommission: true,
  },
  {
    //expenses
    title: 'Expenses Tracker',
    technologies: ['Expressjs', 'Reactjs', 'MongoDB', 'Typescript'],
    description: `<p>I needed a convenient way to track my spending. However all the pre-built apps I could find 
    were way too overkill for what I needed, so I built my own which I now use every day. This app uses the MERN 
    stack with Typescript on the frontend.</p>
    <p>It includes user authentication, allows the user to add new expenses and then 
    see their total expenses for each week or each month.</p>`,
    images: [expenses2, expenses1, expenses3],
    deploymentUrl: 'https://food-expenses.netlify.app/',
    githubUrl: 'https://github.com/WarrenHawker/food-expenses-tracker',
    isCommission: false,
  },
  {
    //diving club
    title: 'Diving Club Website',
    technologies: ['Wordpress'],
    description: `<p>A local diving club needed a new website to advertise their classes. The old website was very dated and 
    not mobile responsive in any way.</p>
    <p>Since the group were comfortable with Wordpress and wanted to be able to customise the colours in the site, I stuck
    with Wordpress for this project, giving the site an updated look that has since boosted the number of people signing
    up for their sessions.</p>
    `,
    images: [diving1, diving2, diving3],
    deploymentUrl: 'https://www.twdiving.co.uk/',
    githubUrl: 'https://github.com/WarrenHawker/tunbridge-wells-diving-custom',
    isCommission: true,
  },
  {
    //rope
    title: 'Rope Performance Group Website',
    technologies: ['Wordpress'],
    description: `<p>A local rope performance group needed a new website to advertise their classes and performances following
    a rebranding. I took the branding they gave me and crafted a new up to date website with it. 
    </p>
    <p>The site includes featured upcoming events, an online booking form and contact form. The admin panel gives the group
    an easy way to keep track of event participants and add new upcoming events. Since getting the new website, 
    most classes and performances have gotten fully booked and the group is growing.</p>
    `,
    images: [rope1, rope2, rope3],
    deploymentUrl: 'https://brightonrope.co.uk/',
    githubUrl: 'https://github.com/WarrenHawker/BrightonRope2022',
    isCommission: true,
  },
];
