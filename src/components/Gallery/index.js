import React from "react";

function Gallery() {
  return (
    <section className="port-gallery">
      <h2 className="title">Portfolio</h2>
      <div className="port-pic">
        <a
          href="https://shielded-falls-48437.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"./images/budget-tracker-app.png"} alt="" width="325px" />
        </a>
        <h4>Budget Tracker</h4>
        <br/>
        <div className="port-links">
          <a
            href="https://www.github.com/paul88vera/budget-tracker"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
      <div className="port-pic">
        <a
          href="https://www.github.com/paul88vera/social-network-api"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"./images/sn-api.png"} alt="" width="325px" />
        </a>
        <h4>Social Network API</h4>
        <br/>
        <div className="port-links">
          <a
            href="https://www.github.com/paul88vera/social-network-api"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
      <div className="port-pic">
        <a
          href="https://damp-temple-66157.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"./images/Old_Fashioned.png"} alt="" width="325px" />
        </a>
        <h4>Old Fashioned - (In Development)</h4>
        <br/>
        <div className="port-links">
          <a
            href="https://www.github.com/paul88vera/Old-Fashioned"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
      <div className="port-pic">
        <a
          href="https://aqueous-depths-39284.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"./images/techieblog_homepage.png"} alt="" width="325px" />
        </a>
        <h4>Techie Blog</h4>
        <br/>
        <div className="port-links">
          <a
            href="https://www.github.com/paul88vera/tech-blog"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
      <div className="port-pic">
        <a
          href="https://github.com/paul88vera/team-profile-generator"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={"./images/Team_Profile_Generator.png"}
            alt=""
            width="325px"
          />
        </a>
        <h4>Team Profile Generator</h4>
        <br/>
        <div className="port-links">
          <a
            href="https://www.github.com/paul88vera/team-profile-generator"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
      <div className="port-pic">
        <a href="https://www.codeup.com" target="_blank" rel="noreferrer">
          <img src={"./images/Codeup-WordPress.gif"} alt="" width="325px" />
        </a>
        <h4>Codeup, LLC - WordPress</h4>
      </div>
      <div className="port-pic">
        <a
          href="https://www.verafiedcreations.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={"./images/VerafiedCreations.png"} alt="" width="325px" />
        </a>
        <br/>
        <h4>Freelance Web Design</h4>
      </div>
    </section>
  );
}

export default Gallery;
