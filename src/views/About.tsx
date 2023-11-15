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
            Technology can be used to enhance people's lives, but only if the
            interfaces are well thought out and easily accessible.
          </p>
          <p>
            I am proud to make web apps and interfaces that anyone can use. My
            goal is always to think of the end-user first.
          </p>
          <p>
            I am a highly motivated and inquisitive developer, always looking
            for new ways to improve the apps I make.
          </p>
        </article>
        <Tech />
      </div>
    </section>
  );
};

export default About;
