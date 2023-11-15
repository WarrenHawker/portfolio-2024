import linkedIn from '/images/linkedin.png';
import youtube from '/images/youtube.png';
import github from '/images/github-white.png';

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
          <img src={linkedIn} />
        </a>
        <a
          href="https://www.youtube.com/@programmingwithmist3897"
          target="_blank"
        >
          <img src={youtube} />
        </a>
        <a href="https://github.com/WarrenHawker" target="_blank">
          <img src={github} />
        </a>
      </div>
    </header>
  );
};

export default Header;
