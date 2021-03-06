import React from "react";
export const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="information-card">
        <section className="welcome-section" id="welcome-section">
          <div className="scroll-part">
            <h1>
              Hello! <br /> I am Helen
            </h1>
            <p>
              <span className="primary-text">Front-end developer</span>
            </p>
            <img className="myphoto-small" src="/myphoto.jpg"></img>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="about-section" id="about-section">
          <div className="scroll-part">
            <h2>About</h2>
            <p>
              <span className="primary-text">Gromova Elena</span>, 19 y.o. Live
              in Saint-Petersburg Love web-programming, design, visit js-meetups
              and and many many other things (like cooking, playing ukulele and
              catch the moment with my camera)
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="skills-section" id="skills-section">
          <div className="scroll-part">
            <h2>Skills</h2>
            <p>
              <span className="primary-text">JavaScript </span>
              <details>
                <summary>intermediate/advanced level</summary>
                <p>
                  I know the syntax, features (like the difference between null
                  and undefined), can work with arrays and their methods, arrow
                  functions, connect external libraries and work with api
                </p>
              </details>
              <span className="primary-text">TypeScript </span>
              <details>
                <summary>middle level</summary>
                <p>Used in some projects for better convenience.</p>
              </details>
              <span className="primary-text">React </span>
              <details>
                <summary>middle level</summary>
                <p>Favorite framework</p>
              </details>
              <span className="primary-text">HTML </span>
              <details>
                <summary>advanced level</summary>
                <p>No comment here, I started with it.</p>
              </details>
              <span className="primary-text">CSS </span>,{" "}
              <span className="primary-text">SASS </span>
              <details>
                <summary>advanced level</summary>
                <p>I always use either this or that</p>
              </details>
              <span className="primary-text">MobX </span>
              <details>
                <summary>middle level</summary>
                <p>
                  Used it during the FLS Hackathon and during JetBrains summer
                  intership to work with the external state of the application.
                </p>
              </details>
              <span className="primary-text">git </span>
              <details>
                <summary>middle level</summary>
                <p>Always use it for project versioning.</p>
              </details>
              <span className="primary-text">parcel </span>
              <details>
                <summary>middle level</summary>
                <p>Prefer use it for project bundling.</p>
              </details>
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="experience-section" id="experience-section">
          <div className="scroll-part">
            <h2>Experience</h2>
            <p>
              <span className="primary-text">2020</span> JetBrains summer
              intership ❤️
              <br />
              <span className="primary-text">2020</span> HackUniversity
              <br />
              <span className="primary-text">2019</span> FLS Hackathon
            </p>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="contact-section" id="contact-section">
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
