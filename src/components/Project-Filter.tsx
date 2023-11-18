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
      <label htmlFor="technology" className="technology-select-label">
        Filter projects by technology
      </label>
      <select
        name="technology"
        className="technology-select"
        onChange={(e) => setFilter(e.target.value)}
      >
        {filters.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="button-container desktop">
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
