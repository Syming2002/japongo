import { FaGithub } from "react-icons/fa";
import "../css/footer.css";
import { Link, type To } from "react-router";

interface FooterProps {
  footerClassName: string;
  footerHrClassName: string;
  version: number;
}

function Footer({ version, footerClassName, footerHrClassName }: FooterProps) {
  function onGithublogoClick(): To {
    return "https://github.com/Syming2002/japongo";
  }

  return (
    <footer className={footerClassName}>
      <div id="footer-wrapper">
        <hr className={footerHrClassName} />
        <div id="footer-div">
          <Link to={onGithublogoClick()}>
            <div id="github-logo-div">
              <FaGithub className="github-logo" />
            </div>
          </Link>
          <p className="version-paragraph">Version: {version}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
