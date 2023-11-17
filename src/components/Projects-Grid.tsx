import { useState } from 'react';
import { ProjectData } from '../types/projects.type';
import Overlay from './Overlay';
import FocusedProject from './Focused-Project';

interface Props {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: Props) => {
  const [focusedProject, setFocusedProject] = useState<ProjectData | null>(
    null
  );
  const [openOverlay, setOpenOverlay] = useState(false);
  return (
    <>
      <Overlay
        isOpen={openOverlay}
        setIsOpen={setOpenOverlay}
        children={<FocusedProject project={focusedProject} />}
        header={
          <>
            <h1>{focusedProject?.title}</h1>{' '}
            <div className="button-container">
              <a
                href={focusedProject?.deploymentUrl}
                className="btn btn-project-link"
                target="_blank"
              >
                Deployed site
              </a>
              <a
                href={focusedProject?.githubUrl}
                className="btn btn-project-link"
                target="_blank"
              >
                Github repo
              </a>
            </div>
          </>
        }
      />
      <section className="projects-grid">
        {projects.map((item, index) => (
          <article
            key={index}
            className="project"
            onClick={() => {
              setFocusedProject(item);
              setOpenOverlay(true);
            }}
          >
            <h2>{item.title}</h2>
            <div className="image-container">
              <img
                src={item.images[0]}
                alt={`image for ${item.title} project`}
              />
            </div>
            <div className="button-container">
              <a
                href={item.deploymentUrl}
                className="btn btn-project-link"
                target="_blank"
              >
                Deployed site
              </a>
              <a
                href={item.githubUrl}
                className="btn btn-project-link"
                target="_blank"
              >
                Github repo
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default ProjectsGrid;
