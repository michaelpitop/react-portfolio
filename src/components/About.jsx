import React from "react";
import "../styles.css";
import Skill from './Skill';
import pic from '../assets/pictures/pic.jpg'
import Certs from './Certs';

function About() {
  return (
    <div>
      <div>
        <img src={pic} alt="" />
      </div>
      <h1>Hi my name is Michael Pitopoulakis!</h1>
      <p><img src="" alt="" /></p>
      <Certs />
      <Skill />
    </div>
  )
}

export default About;
