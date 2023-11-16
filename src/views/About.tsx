import { Link } from 'react-router-dom';
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
            <hr></hr>
            <p>
              After working in the Leisure industry for the past 14 years as an
              educator of one form or another, in 2020 I made a career change
              into web development.
            </p>
            <p>
              There are a great many people who rely on computers to do their
              work, but aren't very "tech-savy". This results in them getting
              slowed down by the software they are being told to use and they
              spend more time troubleshooting than actually doing their job.
            </p>

            <p>
              Because of this, my design philosophy is to build clean, minimal
              UIs that anyone can use. I have found that sometimes the smallest
              details have a huge impact on the overall user experience. When
              I'm working on a project, I try to put myself in the shoes of the
              people I currently work with; People with a great many things to
              do, and no time to waste figuring out some finnicky piece of
              software.
            </p>
            <div className="button-container">
              <Link to="/projects" className="btn btn-primary">
                View my recent work
              </Link>
            </div>
          </article>
          <Tech />
        </div>
      </section>
    </Layout>
  );
};

export default About;
