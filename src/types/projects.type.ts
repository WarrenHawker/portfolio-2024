export type Technology =
  | 'All'
  | 'Reactjs'
  | 'Nextjs'
  | 'Typescript'
  | 'Wordpress'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'Expressjs'
  | 'Contentful';

export type ProjectData = {
  title: string;
  technologies: Technology[];
  description: string;
  images: string[];
  deploymentUrl: string;
  githubUrl: string;
  isCommission: boolean;
};
