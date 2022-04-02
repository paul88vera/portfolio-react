import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <h1>
        <Link to='/'>Paul Vera</Link> 
      </h1>
      <nav>
        <ul>
          <li>
           <Link to='/gallery'>Portfolio</Link> 
          </li>
          <li>
            <Link to='/contact'>Contact</Link> 
          </li>
          <li>
            <Link to='/resume'>Resume</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
