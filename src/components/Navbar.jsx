import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./project">Projects</Link>
        </li>
        <li>
          <Link to="./contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
