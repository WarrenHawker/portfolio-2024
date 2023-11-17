import linkedIn from '/images/logos/linkedin.png';
import youtube from '/images/logos/youtube.png';
import github from '/images/logos/github-white.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const url = useLocation().pathname;
  return (
    <header>
      <nav>
        <input type="checkbox" className="checkbox" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="nav-menu">
          <li className={url == '/' ? 'nav-items active' : 'nav-items'}>
            <Link to="/">Home</Link>
          </li>
          <li className={url == '/about' ? 'nav-items active' : 'nav-items'}>
            <Link to="/about">About</Link>
          </li>
          <li className={url == '/projects' ? 'nav-items active' : 'nav-items'}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/warren-hawker/" target="_blank">
          <img src={linkedIn} alt="linkedin logo" width="40px" height="40px" />
        </a>
        <a
          href="https://www.youtube.com/@programmingwithmist3897"
          target="_blank"
        >
          <img src={youtube} alt="youtube logo" width="40px" height="40px" />
        </a>
        <a href="https://github.com/WarrenHawker" target="_blank">
          <img src={github} alt="github logo" width="40px" height="40px" />
        </a>
      </div>
    </header>
  );
};

export default Header;
