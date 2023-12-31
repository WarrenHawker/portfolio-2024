import reactImg from '/images/logos/react.webp';
import nextImg from '/images/logos/next-js.webp';
import typescriptImg from '/images/logos/typescript.webp';
import githubImg from '/images/logos/github.webp';
import htmlcssjsImg from '/images/logos/html-css-js.webp';
import contentfulImg from '/images/logos/contentful.webp';
import wordpressImg from '/images/logos/wordpress.webp';
import postgresImg from '/images/logos/postgres.webp';
import mongoImg from '/images/logos/mongodb.webp';
import nodeImg from '/images/logos/nodejs.webp';
import expressImg from '/images/logos/expressjs.webp';
import { useRef, useState, useEffect } from 'react';

const TechGrid = () => {
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
        <img src={reactImg} alt="reactjs logo" loading="lazy" />
        <img src={typescriptImg} alt="typescript logo" loading="lazy" />
      </div>
      <div id="box-2">
        <img src={nextImg} alt="nextjs logo" loading="lazy" />
      </div>
      <div id="box-3">
        <img src={wordpressImg} alt="wordpress logo" loading="lazy" />
      </div>
      <div id="box-4">
        <img src={postgresImg} alt="postreSQL logo" loading="lazy" />
        <img src={mongoImg} alt="mongoDB logo" loading="lazy" />
      </div>
      <div id="box-5">
        <img src={githubImg} alt="github logo" loading="lazy" />
      </div>
      <div id="box-6">
        <h1>Technologies that I work with</h1>
      </div>
      <div id="box-7">
        <img src={nodeImg} alt="nodejs logo" loading="lazy" />
        <img src={expressImg} alt="expressjs logo" loading="lazy" />
      </div>
      <div id="box-8">
        <img src={htmlcssjsImg} alt="htm/css/js logo" loading="lazy" />
      </div>
      <div id="box-9">
        <img src={contentfulImg} alt="contentful logo" loading="lazy" />
      </div>
    </div>
  );
};

export default TechGrid;
