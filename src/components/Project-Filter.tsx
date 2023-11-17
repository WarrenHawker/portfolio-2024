interface Props {
  filter: string;
  setFilter: (value: string) => void;
}

const ProjectFilter = ({ filter, setFilter }: Props) => {
  const filters = [
    'All',
    'Reactjs',
    'Nextjs',
    'Typescript',
    'Wordpress',
    'MongoDB',
    'PostgreSQL',
    'Expressjs',
    'Contentful',
  ];
  return (
    <div className="filter ">
      <div className="button-container">
        {filters.map((item, index) => (
          <button
            key={index}
            className={
              item == filter ? 'btn btn-filter active' : 'btn btn-filter'
            }
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;