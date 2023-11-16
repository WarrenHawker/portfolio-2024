import { ProjectData } from '../types/projects.type';

interface Props {
  project: ProjectData | null;
}

const FocusedProject = ({ project }: Props) => {
  if (!project) {
    return null;
  }
  return (
    <article className="focused-project">
      <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
      <h3>Tech Stack: {project.technologies.map((item) => `${item}, `)}</h3>
    </article>
  );
};

export default FocusedProject;
