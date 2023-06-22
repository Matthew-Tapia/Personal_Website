import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Foot = () => {
  return (
    <div className="flex justify-center">
      <div className="py-10 space-x-4 text-sky-200">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/matthew-tapia-1b765a1b7/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" href="https://github.com/Matthew-Tapia">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Foot;
