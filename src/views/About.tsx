import Tech from '../components/Tech';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <section className="view" id="about">
        <h1 className="view-title">About me</h1>
        <div className="grid">
          <article>
            <p>
              <strong>Highly Motivated and Inquisitive,</strong> I am always
              looking for new ways to improve the apps I make.
            </p>
            <a href="#projects" className="btn btn-primary">
              View my recent work
            </a>
          </article>
          <Tech />
        </div>
      </section>
    </Layout>
  );
};

export default About;
