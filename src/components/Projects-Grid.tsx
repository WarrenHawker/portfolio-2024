import { useState } from 'react';
import { Projects } from '../data/projects.data';
import { ProjectData } from '../types/projects.type';
import Overlay from './Overlay';
import FocusedProject from './Focused-Project';

const ProjectsGrid = () => {
  const [focusedProject, setFocusedProject] = useState<ProjectData | null>(
    null
  );
  const [openOverlay, setOpenOverlay] = useState(false);
  return (
    <>
      <section className="projects-grid">
        {Projects.map((item) => (
          <article
            className="project"
            onClick={() => {
              setFocusedProject(item);
              setOpenOverlay(true);
            }}
          >
            <h2>{item.title}</h2>
            <img src={item.images[0]} alt={`image for ${item.title} project`} />
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
    </>
  );
};

export default ProjectsGrid;
