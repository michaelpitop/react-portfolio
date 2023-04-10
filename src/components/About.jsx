import React from "react";
import "../styles.css";
import Skill from './Skill';
import pic from '../assets/pictures/pic.jpg'
import Certs from './Certs';

function About() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-2">
        <img class="rounded-full " src={pic} alt="" /> {/* need to change the size of the  picture in the future with h and w */}
        <div class="text-center mt-12	">
          <h1> <strong> <em> My name is Michael Pitopoulakis, nice to meet you!</em></strong></h1>
          <br />
          <p>Originally from the island of Crete, Greece and currently residing in the city of Munich, Germany</p>
          <p>I'm a newcomer to the web development scene and I'm searching for my first job to prove my knowdledge and test my mettle against new challenges.</p>
          <br />
          <p> The Corona pandemic was eye-opening for me. Besides the
              immense tragedy the world was facing, on a personal level I
              understood that I was deeply unsatisfied with the career path I had
              chosen thus far. That's why ,starting on Jan 2022, I decided to bet
              everything on a career change as a web developer, where I can
              challenge my wits and test my mettle on something as fascinating
              as the tech industry.   </p>

          <br />
          <p>My journey started with my admition to Le Wagon Munich, a coding bootcamp
             that tought me the important foundamentals of web development. </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias error dolores, ea praesentium a deserunt asperiores distinctio voluptatem voluptatibus earum porro, similique rem cum sit, animi suscipit itaque fugit vero.</p>

        </div>
      </div>
      {/* <div>
        <div class='flex text-[50px]  my-5 justify-center'>
          <p><strong><em>My relevant links</em></strong></p>
        </div>
        <div class='flex gap-9 flex-wrap	text-[40px] basis-10 justify-center	text-white'>
          <a class="hover:text-sky-400" href="https://michaelpitop.tiiny.site/">Download my CV</a>
          <a class="hover:text-sky-400" href="https://github.com/michaelpitop/">My GitHub page</a>
          <a class="hover:text-sky-400" href="https://www.linkedin.com/in/michaelpitop/">LinkedIn Profile</a>
        </div>
      </div> */}
      <Certs />
      <Skill />
    </div>
  )
}

export default About;
