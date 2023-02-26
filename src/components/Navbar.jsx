import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav>
      <div className="grid grid-cols-4 text-white font-bold">
          <div><Link to="/">Home</Link></div>
          <div><Link to="./project">Projects</Link></div>
          <div><Link to="./contact">Contact</Link></div>
          <div><Link to="./certs">Certificates</Link></div>
      </div>
    </nav>
  );
}

export default Navbar;
