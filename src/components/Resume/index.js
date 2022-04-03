/**eslint-disable */
import React from "react";

function Resume() {
  return (
    <section className="resume">
      <h2 className="title">Resume</h2>
      <a href="./resume.pdf" target='_blank' className="download-btn" download>
        Download Resume
      </a>
      <div>
        <br />
        <h3>Front-End Proficiencies:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS/SCSS/SASS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Mobile-First Design</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
        </ul>
        <br />
        <h3>Back-End Proficiencies:</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>NoSQL/MySQL</li>
          <li>GraphQL</li>
          <li>REST</li>
          <li>Sequelize</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
