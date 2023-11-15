import linkedIn from '/images/logos/linkedin.png';
import youtube from '/images/logos/youtube.png';
import github from '/images/logos/github-white.png';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="nav-items">
            <a href="#home">Home</a>
          </li>
          <li className="nav-items">
            <a href="#about">About</a>
          </li>
          <li className="nav-items">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/warren-hawker/" target="_blank">
          <img src={linkedIn} alt="linkedin logo" />
        </a>
        <a
          href="https://www.youtube.com/@programmingwithmist3897"
          target="_blank"
        >
          <img src={youtube} alt="youtube logo" />
        </a>
        <a href="https://github.com/WarrenHawker" target="_blank">
          <img src={github} alt="github logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
