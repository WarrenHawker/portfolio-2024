import { useState } from 'react';
import { ProjectData } from '../types/projects.type';
import Overlay from './Overlay';
import FocusedProject from './Focused-Project';
import { AnimatePresence, motion } from 'framer-motion';

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

      <motion.section
        className="projects-grid"
        key={projects.map((project) => project.title).join('-')}
      >
        <AnimatePresence>
          {projects.map((item, index) => (
            <motion.article
              key={index}
              className="project"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 1 }}
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
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default ProjectsGrid;
