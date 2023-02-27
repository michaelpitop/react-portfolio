import React from "react";
import "../styles.css";

function Footer() {
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#certs" className="hover:underline">Certifications</a></li>
      </ul>

      {/* <img src={} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" /> */}

    </div>
  )
}

export default Footer;
