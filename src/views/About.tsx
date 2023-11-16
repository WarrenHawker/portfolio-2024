import Tech from '../components/Tech';

const About = () => {
  return (
    <section className="view" id="about">
      <h1 className="view-title">About me</h1>
      <div className="grid">
        <article>
          <h2 className="sub-title">
            Pleased to meet you. My name is <strong>Warren</strong>, I'm a Web
            Developer from the UK.
          </h2>
          <p>
            I specialise in making <strong>Clean and Intuitive </strong>web apps
            that anyone can use. My goal is always to think of the end-user
            first.
          </p>
          <p>
            <strong>Highly Motivated and Inquisitive,</strong> I am always
            looking for new ways to improve the apps I make.
          </p>
          <a href="#projects" className="btn btn-primary">
            View my recent work
          </a>
          <a href="#projects" className="btn btn-secondary">
            View my recent work
          </a>
        </article>
        <Tech />
      </div>
    </section>
  );
};

export default About;
