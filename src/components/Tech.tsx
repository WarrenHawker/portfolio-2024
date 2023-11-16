import reactImg from '/images/logos/react.png';
import nextImg from '/images/logos/next-js.jpeg';
import typescriptImg from '/images/logos/typescript.png';
import githubImg from '/images/logos/github.jpg';
import htmlcssjsImg from '/images/logos/html-css-js.png';
import contentfulImg from '/images/logos/contentful.svg';
import wordpressImg from '/images/logos/wordpress.svg';
import postgresImg from '/images/logos/postgres.png';
import mongoImg from '/images/logos/mongodb.png';
import nodeImg from '/images/logos/nodejs.png';
import expressImg from '/images/logos/expressjs.png';
import { useRef, useState, useEffect } from 'react';

const Tech = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const gridRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.height = `${
        gridRef.current.getBoundingClientRect().width
      }px`;
    }
  }, [dimensions]);

  return (
    <div className="tech-grid" ref={gridRef}>
      <div id="box-1">
        <img src={reactImg} alt="reactjs logo" />
        <img src={typescriptImg} alt="typescript logo" />
      </div>
      <div id="box-2">
        <img src={nextImg} alt="nextjs logo" />
      </div>
      <div id="box-3">
        <img src={wordpressImg} alt="wordpress logo" />
      </div>
      <div id="box-4">
        <img src={postgresImg} alt="postreSQL logo" />
        <img src={mongoImg} alt="mongoDB logo" />
      </div>
      <div id="box-5">
        <img src={githubImg} alt="github logo" />
      </div>
      <div id="box-6">
        <h1>Technologies that I work with</h1>
      </div>
      <div id="box-7">
        <img src={nodeImg} alt="nodejs logo" />
        <img src={expressImg} alt="expressjs logo" />
      </div>
      <div id="box-8">
        <img src={htmlcssjsImg} alt="htm/css/js logo" />
      </div>
      <div id="box-9">
        <img src={contentfulImg} alt="contentful logo" />
      </div>
    </div>
  );
};

export default Tech;
