import React from "react";
import "../styles.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";


function Footer() {
  return (
    <footer class="flex relative bottom-0 left-0 right-0 gap-3 justify-center mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <a href="https://github.com/michaelpitop"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/michaelpitop/"><BsLinkedin /></a>
      <a href="mailto:michaelpitop@outlook.com"><BsEnvelope /></a>
      |
      <p>created by michaelpitop</p>
    </footer>
  )
}

export default Footer;
