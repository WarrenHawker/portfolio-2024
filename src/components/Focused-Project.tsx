import { useState } from 'react';
import { ProjectData } from '../types/projects.type';
import { useInterval } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  project: ProjectData | null;
}

const FocusedProject = ({ project }: Props) => {
  const [shownImage, setShownImage] = useState(0);

  useInterval(() => {
    if (project) {
      const totalImages = project.images.length;
      if (shownImage == totalImages - 1) {
        setShownImage(0);
      } else setShownImage(shownImage + 1);
    }
  }, 5000);

  if (!project) {
    return null;
  }

  return (
    <article className="focused-project">
      <div className="left-col">
        <p className="tech-stack">
          <strong>Tech Stack:</strong>{' '}
          {project.technologies.map((item) => `${item}, `)}
        </p>
        <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
      </div>
      <div className="image-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={project.images[shownImage]}
            src={project.images[shownImage]}
            alt={`image for ${project.title} project`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </article>
  );
};

export default FocusedProject;
