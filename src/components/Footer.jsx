import React from "react";
import "../styles.css";

function Footer() {
  return (
    <div class="flex gap-3 justify-center mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <p><a href="/" class="hover:underline">About</a></p> {/*need to work the links in the future */}
      <p><a href="#skill" class="hover:underline">Skills</a></p>
      <p><a href="/project" class="hover:underline">Projects</a></p>
      <p><a href="/certs" class="hover:underline">Certifications</a></p>
      |
      <p>created by michaelpitop</p>
    </div>
  )
}

export default Footer;
