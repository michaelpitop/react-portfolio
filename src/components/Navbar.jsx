import React from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav>
      <div class="flex gap-3 justify-end text-white font-bold">
          <div class="hover:bg-sky-700"><Link to="/">Home</Link></div>
          <div><Link to="./project">Projects</Link></div>
          <div><Link to="./contact">Contact</Link></div>
          <div><Link to="./certs">Certificates</Link></div>
      </div>
    </nav>
  );
}

export default Navbar;
