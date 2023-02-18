import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="./project">Projects</Link>
      <Link to="./contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
