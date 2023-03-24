import React from "react";
import "../styles.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";


function Footer() {
  return (
    <footer class="flex inline-block gap-4 justify-center  text-white">
      <a href="https://github.com/michaelpitop" class="flex self-center"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/michaelpitop/" class="flex self-center"><BsLinkedin /></a>
      <a href="mailto:michaelpitop@outlook.com" class="flex self-center"><BsEnvelope /></a>
      |
      <p>created by michaelpitop</p>
    </footer>
  )
}

export default Footer;
