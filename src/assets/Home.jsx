import React from 'react';
import "../styles.css";
import {Link} from "react-router-dom";
import gif1 from '/home/michaelpitop/code/michaelpitop/react-portfolio/src/assets/pictures/gif1.gif';

function Home() {
  return (
    <div class="grid grid-cols-2 gap-4">
        <div class="text-5xl text-left">
          <p><strong><em>Hi, <br /> my name is Michael! <br /> Junior Web Developer</em></strong></p>

          <h2>Junior Fullstack Developer | Junior Frontend Developer</h2>
          <br />
          <div class="grid grid-cols-2 gap-8">
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="../contact">Lets talk!</Link></button>
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="./about">About me</Link></button>
          </div>
        </div>
        <div>
          <img class=" h-96 w-200 rounded-lg" src={gif1} alt="" />
        </div>

    </div>
    )

  };



export default Home;
