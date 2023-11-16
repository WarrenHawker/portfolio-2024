import Layout from '../components/layout/Layout';
import profileImg from '/images/profile-pic2.png';

const Home = () => {
  return (
    <Layout>
      <section className="view" id="home">
        <div className="grid">
          <article>
            <h1 className="view-title">Hi there!</h1>
            <h2 className="sub-title">
              My name is <strong>Warren</strong>, I'm a Web Developer from the
              UK.
            </h2>

            <p>
              I specialise in making <strong>Clean and Intuitive </strong>web
              apps that anyone can use. My goal is always to think of the
              end-user first.
            </p>

            <div className="button-container">
              <a href="#projects" className="btn btn-secondary">
                Learn more about me
              </a>
              <a href="#projects" className="btn btn-primary">
                View my recent work
              </a>
            </div>
          </article>
          <img src={profileImg} className="profile-pic" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
