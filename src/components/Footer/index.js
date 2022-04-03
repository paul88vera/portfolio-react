import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/paul88vera"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./images/icon-github.png" alt="github link" width="40px" />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-vera-074ab1a5/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./images/LI-Logo.png" alt="linked-in link" width="40px" />
        </a>
        <a
          href="https://stackoverflow.com/users/17246597/paul-vera"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/StackOverflow-icon.png"
            alt="stack overflow link"
            width="40px"
          />
        </a>
      </div>
      <p>Paul Vera © Copyright 2022</p>
    </footer>
  );
}

export default Footer;
