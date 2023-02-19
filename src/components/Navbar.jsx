import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white">
      <Link to="/">Home</Link>
      <Link to="./project">Projects</Link>
      <Link to="./contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
