import { useEffect, useState } from 'react';
import { ProjectData } from '../types/projects.type';
import { useInterval } from 'usehooks-ts';
import { AnimatePresence, m } from 'framer-motion';

interface Props {
  project: ProjectData | null;
}

const FocusedProject = ({ project }: Props) => {
  const [shownImage, setShownImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setShownImage(0);
  }, [project]);

  useInterval(() => {
    if (project && !isPaused) {
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
          <m.img
            key={project.images[shownImage]}
            src={project.images[shownImage]}
            alt={`image for ${project.title} project`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            loading="lazy"
          />
        </AnimatePresence>
        <button
          className="btn"
          onClick={() => {
            setIsPaused((prev) => !prev);
          }}
        >
          {isPaused ? 'play' : 'pause'}
        </button>
      </div>
    </article>
  );
};

export default FocusedProject;
