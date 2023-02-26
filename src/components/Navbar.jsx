import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav className="flex justify-between items-right text-white text-3xl font-bold underline">
      <div class="container">
          <div class="column"><Link to="/"><h3>Home</h3></Link></div>
          <div class="column"><Link to="./project"><h3>Projects</h3></Link></div>
          <div class="column"><Link to="./contact"><h3>Contact</h3></Link></div>
          <div class="column"><Link to="./certs"><h3>Certificates</h3></Link></div>
      </div>
    </nav>
  );
}

export default Navbar;
