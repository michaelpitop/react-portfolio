import React from "react";
import "../styles.css";
import pic from "../assets/certs/pic.jpg"

function Text1() {

  return (
    <div class="flex">
      <div class="columns-xs">
        <img src={pic} alt="me!" /></div>
      <div class="justify-center">
        <h1>Hello! My name is Michael Pitopoulakis</h1>
        <h2>I'm a Front-end developer </h2>
      </div>
    </div>
  );
}

export default Text1;
