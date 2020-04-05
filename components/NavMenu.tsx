import React from "react";
import { A } from "./A";
export const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <A href="/#welcome-section" scrollTo="welcome-section">
            Welcome
          </A>
        </li>
        <li>
          <A href="/#about-section" scrollTo="about-section">
            About
          </A>
        </li>
        <li>
          <A href="/#skills-section" scrollTo="skills-section">
            Skills
          </A>
        </li>
        <li>
          <A href="/#experience-section" scrollTo="experience-section">
            Experience
          </A>
        </li>
        <li>
          <A href="/#contact-section" scrollTo="contact-section">
            Contact
          </A>
        </li>
      </ul>
    </nav>
  );
};
