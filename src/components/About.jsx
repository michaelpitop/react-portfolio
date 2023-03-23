import React from "react";
import "../styles.css";
import Skill from './Skill';
import pic from '../assets/pictures/pic.jpg'
import Certs from './Certs';

function About() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <img class="rounded-full " src={pic} alt="" /> {/* need to change the size of the  picture in the future with h and w */}
        </div>
        <div class="text-center mt-12	">
          <h1> <strong> <em> Nice to meet you! My name is Michael!</em></strong></h1>
          <br />
          <p>Originally from the island of Crete, Greece and currently residing in the city of Munich, Germany</p>
          <p>I'm a newcomer to the wevb development scene and I'm searching for my first job to prove my knowdledge and test my mettle against new challenges.</p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, maiores, ipsam veniam facilis quos est nihil quis, a ipsum magni at eum similique numquam sapiente adipisci velit libero obcaecati quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusantium similique consequatur nulla repellendus quibusdam sit, quaerat optio, neque reiciendis nesciunt? Itaque sapiente, blanditiis in animi explicabo harum earum nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt enim tenetur culpa minus amet quasi eos cum sapiente dicta. Veritatis quo veniam totam in molestiae voluptas autem corporis temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sint neque repellendus eum quam impedit odit doloremque! Nihil animi quis aliquam laboriosam unde iste numquam modi odio et, illum at.</p>
        </div>
      </div>
      <Certs />
      <Skill />
    </div>
  )
}

export default About;
