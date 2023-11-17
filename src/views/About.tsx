import { Link } from 'react-router-dom';
import TechGrid from '../components/Tech-Grid';
import Layout from '../components/layout/Layout';
import Overlay from '../components/Overlay';
import { useState } from 'react';
import CV from '../components/CV';

const About = () => {
  const [showCV, setShowCV] = useState(false);
  return (
    <Layout>
      <div className="view" id="about">
        <h1 className="view-title">About me</h1>
        <section className="grid">
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
              Because of this my design philosophy is to build <br />
              <strong>clean and minimal UIs</strong> that anyone can use. I have
              found that sometimes the smallest details have a huge impact on
              the overall user experience.
            </p>
            <p>
              When I'm working on a project I try to put myself in the shoes of
              the people I've worked with in leisure. People with a great many
              things to do, and no time to waste figuring out some finnicky
              piece of software.
            </p>
            <div className="button-container">
              <Link to="/projects" className="btn btn-primary">
                View my recent work
              </Link>
              <button
                className="btn btn-secondary"
                onClick={() => setShowCV(true)}
              >
                View CV
              </button>
            </div>
          </article>
          <TechGrid />
        </section>
        <Overlay
          header={
            <>
              <h1>Curriculum Vitae</h1>
              <div className="button-container">
                <a
                  href="warren-hawker-cv.pdf"
                  download="Warren_Hawker_CV"
                  target="_blank"
                  className="btn btn-download"
                >
                  Download CV
                </a>
              </div>
            </>
          }
          isOpen={showCV}
          setIsOpen={setShowCV}
          children={<CV />}
        />
      </div>
    </Layout>
  );
};

export default About;
