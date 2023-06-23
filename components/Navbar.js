"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="mx-auto px-8 py-6">
        <button
          className={"lg:hidden " + (isOpen ? "hidden" : "block")}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <button
          className={"my-3 lg:hidden " + (isOpen ? "block" : "hidden")}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <ul
          className={
            "lg:flex flex-col lg:flex-row lg:justify-end space-y-2 lg:space-y-0 lg:space-x-10 font-light text-lg text-sky-950 " +
            (isOpen ? "block" : "hidden")
          }
        >
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
