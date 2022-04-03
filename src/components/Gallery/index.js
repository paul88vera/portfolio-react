import React from "react";

function Gallery() {
  return (
    <section className="port-gallery">
      <div className="port-pic">
        <img src={"./images/budget-tracker-app.png"} alt="" width='350px'/>
      </div>
      <div className="port-pic">
        <img src={"./images/Old_Fashioned.png"} alt="" width='350px' />
      </div>
      <div className="port-pic">
        <img src={"./images/techieblog_homepage.png"} alt="" width='350px' />
      </div>
      <div className="port-pic">
        <img src={"./images/Team_Profile_Generator.png"} alt="" width='350px' />
      </div>
      <div className="port-pic">
        <img src={"./images/Codeup-WordPress.gif"} alt="" width='350px' />
      </div>
      <div className="port-pic">
        <img src={"./images/VerafiedCreations.png"} alt="" width='350px' />
      </div>
    </section>
  );
}

export default Gallery;
