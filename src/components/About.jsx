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
          <p>I'm an aspiring web developer and I'm searching for my first job to prove my knowdledge and test my mettle against new challenges.</p>
          <br />
          <p>Originally from the island of Crete, Greece and currently residing in the city of Munich, Germany. The COVID-19 pandemic served as a significant wake-up call for me, as I came to a realization that I was profoundly dissatisfied with my current career path. Thats why in January 2022 I made the life-changing decision to pursue a career in web development and began my journey. This would allow me to push myself to the limits and delve into the intriguing world of the tech industry.</p>
          <br />
          <p>My journey into the world of web development began with my admission to Le Wagon Munich, a coding bootcamp that equipped me with the essential fundamentals of web development. During my time there, I gained valuable experience in collaborative teamwork, from the initial stages of development to production, including bug handling within a limited time frame.</p>
          <br />
          <p>After completing the bootcamp, I took it upon myself to continue expanding my knowledge and skills in web development by independently learning new tools such as React, Tailwind, C#, and .NET. Despite maintaining a 60-hour work schedule, I spent my free time making different small projects to gain practical skills and knowledge so that I could become job-ready.</p>
          <br />
          <p class="text-[20px]">More info about me on my CV</p>
        </div>
      </div>
      <div>
        <div class='flex text-[50px]  my-5 justify-center'>
          <p><strong><em>My relevant links</em></strong></p>
        </div>
        <div class='flex gap-9 flex-wrap	text-[40px] basis-10 justify-center	text-white'>
          <a class="hover:text-sky-400" href="https://michaelpitop.tiiny.site/">Download my CV</a>
          <a class="hover:text-sky-400" href="https://github.com/michaelpitop/">My GitHub page</a>
          <a class="hover:text-sky-400" href="https://www.linkedin.com/in/michaelpitop/">LinkedIn Profile</a>
        </div>
      </div>
      <Certs />
      <Skill />
    </div>
  )
}

export default About;
