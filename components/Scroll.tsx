import React from "react";
export const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="information-card">
        <section className="welcome-section">
          <div className="scroll-part">
            <h1>
              Hello! <br /> I am Helen
            </h1>
            <p>
              <span className="primary-text">Front-end developer</span>
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="about-section">
          <div className="scroll-part">
            <h2>About</h2>
            <p>
              <span className="primary-text">Gromova Elena</span>, 19 y.o. Live
              in Saint-Petersburg Love web-programming, design, visit js-meetups
              and and many many other things (like ccoking, playing ukulele and
              catch the moment with my camera)
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="skills-section">
          <div className="scroll-part">
            <h2>Skills</h2>
            <p>
              <span className="primary-text">JavaScript</span>
              <br />
              intermediate/advanced. I know the syntax, features (like the
              difference between null and undefined), Can work with arrays and
              their methods, arrow functions, connect external libraries and
              work with api
              <br />
              <span className="primary-text">TypeScript</span> <br /> medium
              level. Used in some projects for better convenience.
              <br />
              <span className="primary-text">React</span> <br /> medium level.
              Favorite way to develop web applications.
              <br />
              <span className="primary-text">HTML</span> <br /> advanced level.
              No comment here, I started with it.
              <br />
              <span className="primary-text">CSS</span>,{" "}
              <span className="primary-text">SASS</span> <br /> advanced level.
              I always use either this or that. By the way, I like to use CSS
              Modules together with React.
              <br />
              <span className="primary-text">MobX</span> <br /> basic level.
              Used it during the FLS Hackathon to work with the external state
              of the application.
              <br />
              <span className="primary-text">git</span> <br /> average level.
              Always use it for project versioning.
              <br />
              <span className="primary-text">parcel</span>
              <br /> average level. Favorite tool for project bundling.
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="experience-section">
          <div className="scroll-part">
            <h2>Experience</h2>
            <p>
              <span className="primary-text">2020</span> HackUniversity
              <br />
              <span className="primary-text">2019</span> FLS Hackathon
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="contact-section">
          <div className="scroll-part">
            <h2>Contacts</h2>
            <p>
              Telegram: <a href="https://teleg.run/h_bright">@h_bright</a>
              <br />
              GitHub: <a href="https://github.com/HelenOne">HelenOne</a>
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
      </div>
    </div>
  );
};
