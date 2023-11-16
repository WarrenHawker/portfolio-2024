import { Link } from 'react-router-dom';
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
              My name is <strong>Warren</strong> and I'm a Web Developer from
              the UK.
            </h2>

            <p>
              I specialise in making <strong>Clean and Intuitive </strong> web
              apps using Javascript.
            </p>
            <p>
              My goal is always to think of the end-user first, to make apps
              that anyone can use.
            </p>

            <div className="button-container">
              <Link to="/projects" className="btn btn-primary">
                View my recent work
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn more about me
              </Link>
            </div>
          </article>
          <img src={profileImg} className="profile-pic" alt="profile picture" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
