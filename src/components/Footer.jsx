import React from "react";
import "../styles.css";

function Footer() {
  return (
    <div class="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul class="text-center">
        <li><a href="/" class="hover:underline">About</a></li> {/*need to work the links in the future */}
        <li><a href="#skill" class="hover:underline">Skills</a></li>
        <li><a href="/project" class="hover:underline">Projects</a></li>
        <li><a href="/certs" class="hover:underline">Certifications</a></li>
      </ul>
    </div>
  )
}

export default Footer;
