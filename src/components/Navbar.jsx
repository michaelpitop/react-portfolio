import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white">
      <div class="container">
        <div class="column"><Link to="/">Home</Link></div>
        <div class="column"><Link to="./project">Projects</Link></div>
        <div class="column"><Link to="./contact">Contact</Link></div>
      </div>
    </nav>
  );
}

export default Navbar;
