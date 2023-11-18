import { useEffect, useState } from 'react';
import ProjectFilter from '../components/Project-Filter';
import ProjectsGrid from '../components/Projects-Grid';
import Layout from '../components/layout/Layout';
import { Projects as data } from '../data/projects.data';
import { Technology } from '../types/projects.type';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [shownProjects, setShownProjects] = useState(data);

  useEffect(() => {
    if (filter == 'All') {
      setShownProjects(data);
    } else {
      const filteredProjects = data.filter((item) =>
        item.technologies.includes(filter as Technology)
      );
      setShownProjects(filteredProjects);
    }
  }, [filter]);

  return (
    <Layout>
      <div className="view" id="projects">
        <h1 className="page-title">Projects</h1>
        <ProjectFilter filter={filter} setFilter={setFilter} />
        <ProjectsGrid projects={shownProjects} />
      </div>
    </Layout>
  );
};

export default Projects;
