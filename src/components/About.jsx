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
          <p>I'm an aspiring web developer searching for my first job in the field.</p>
          <br />
          <p>Originally from the island of Crete, Greece and currently residing in the city of Munich, Germany.
I've always been interested in programming. I find it fascinating that you can use it to bring your ideas to life and solve complex problems using logical and creative thinking.

For this reason in January 2022 I joined Le Wagon Munich, a coding bootcamp where I learned the basics of web development. For example JavaScript, Ruby on Rails, different tools like Git, relational database, different types of APIs and much more.</p>
          <br />
          <p>My journey into the world of web development began with my admission to Le Wagon Munich, a coding bootcamp that equipped me with the essential fundamentals of web development. During my time there, I gained valuable experience in collaborative teamwork, from the initial stages of development to production, including bug handling within a limited time frame.</p>
          <br />
          <p>After completing the bootcamp, I took it upon myself to continue expanding my knowledge and skills in web development by independently learning new tools such as React, Tailwind, C#, and .NET. Despite maintaining a 60-hour work schedule, I spent my free time making different small projects to gain practical skills and knowledge so that I could become job-ready.</p>
          <br />
        </div>
      </div>
      <div>
        <div class='flex text-[50px]  my-5 justify-center'>
          <p><strong><em>My relevant links</em></strong></p>
        </div>
        <div class='flex gap-9 flex-wrap	text-[40px] basis-10 justify-center	text-white'>
          <a class="hover:text-sky-400" href="https://www.docdroid.net/7oCkhJg/michael-pitopoulakis-cv-pdf">Download my CV</a>
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
