import reactImg from '/images/react.png';
import nextImg from '/images/Nextjs.svg';
import typescriptImg from '/images/typescript.png';

const Tech = () => {
  return (
    <section className="tech-grid">
      <div id="box-1">
        <img src={reactImg} />
        <img src={typescriptImg} />
      </div>
      <div id="box-2"></div>
      <div id="box-3"></div>
      <div id="box-4"></div>
      <div id="box-5"></div>
      <div id="box-6"></div>
      <div id="box-7"></div>
      <div id="box-8"></div>
      <div id="box-9"></div>
    </section>
  );
};

export default Tech;
