import React from "react";
import "../styles.css";
import pic1 from "../assets/pictures/gaidouronisi.jpg"

function Text1() {

  return (
    <div>
      <div>
        <img src={pic1} alt="" /></div>
      <div class="justify-center">
        <h1>Hello! My name is Michael Pitopoulakis</h1>
        <h2>I'm a Junior Fullstack developer </h2>
      </div>
    </div>
  );
}

export default Text1;
