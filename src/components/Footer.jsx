import React from "react";
import "../styles.css";

function Footer() {
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li> {/*need to work the links in the future */}
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="/project" className="hover:underline">Projects</a></li>
        <li><a href="#certs" className="hover:underline">Certifications</a></li>
      </ul>
    </div>
  )
}

export default Footer;
