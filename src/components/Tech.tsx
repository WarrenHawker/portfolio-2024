import reactImg from '/images/react.png';
import nextImg from '/images/next-js.jpeg';
import typescriptImg from '/images/typescript.png';
import githubImg from '/images/github.jpg';
import htmlcssjsImg from '/images/html-css-js.png';
import contentfulImg from '/images/contentful.svg';
import wordpressImg from '/images/wordpress.svg';
import postgresImg from '/images/postgres.png';
import mongoImg from '/images/mongodb.png';
import nodeImg from '/images/nodejs.png';
import expressImg from '/images/expressjs.png';

const Tech = () => {
  return (
    <section className="tech-grid">
      <div id="box-1">
        <img src={reactImg} />
        <img src={typescriptImg} />
      </div>
      <div id="box-2">
        <img src={nextImg} />
      </div>
      <div id="box-3">
        <img src={wordpressImg} />
      </div>
      <div id="box-4">
        <img src={postgresImg} />
        <img src={mongoImg} />
      </div>
      <div id="box-5">
        <img src={githubImg} />
      </div>
      <div id="box-6">
        <h1>Technologies</h1>
        <h2>That I have experience with</h2>
      </div>
      <div id="box-7">
        <img src={nodeImg} />
        <img src={expressImg} />
      </div>
      <div id="box-8">
        <img src={htmlcssjsImg} />
      </div>
      <div id="box-9">
        <img src={contentfulImg} />
      </div>
    </section>
  );
};

export default Tech;
