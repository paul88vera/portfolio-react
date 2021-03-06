import React from "react";

function About() {
  return (
    <section className="about">
     <h2 className="title">About Me</h2>
      <div className="proPic">
        <img src={"./images/pro-pic.png"} alt="" width="200px" />
      </div>
      <div className="about-para">
        <span>The name is Paul Vera.</span> I'm just a dude who wants to code some awesome websites and
        applications. I've been learning, implementing, and teaching <span>front-end
        design</span>, and <span>graphic design</span> for the past <span>5 years.</span> I've been diving deeper into <span>back-end
        coding</span> and have transitioned into a <span>MERN full-stack developer!</span> I also completed a <span>24 week MERN Full Stack Bootcamp</span> at the <span>University of Texas at Austin</span>. Take a look at
        my portfolio and <span>contact me if you need an awesome
        website!!</span>
      </div>
    </section>
  );
}

export default About;
