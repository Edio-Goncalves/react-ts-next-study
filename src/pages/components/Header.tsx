import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </a>
            </li>
            <li>
              <a href="https://github.com/Edio-Goncalves">
                <FontAwesomeIcon icon={faGithub} />
                Github
              </a>
            </li>
            <li>
              <a href="https://ediogoncalvesdev.com.br/">
                <FontAwesomeIcon icon={faGlobe} />
                Portifólio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
