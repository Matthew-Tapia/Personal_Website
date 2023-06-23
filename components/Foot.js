import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Foot = () => {
  return (
    <div className="flex justify-center">
      <div className="py-10 text-center text-sky-200">
        <div className="space-x-4">
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

        <div className="mt-2 text-xs">Created with Next.js</div>

        <div className="mt-2 text-xs">
          <FontAwesomeIcon icon={faCopyright} /> 2023 Matthew Tapia
        </div>
      </div>
    </div>
  );
};

export default Foot;
