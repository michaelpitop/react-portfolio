import React from 'react';
import "../styles.css";
import {Link} from "react-router-dom";
import gif1 from '/home/michaelpitop/code/michaelpitop/react-portfolio/src/assets/pictures/gif1.gif';

function Home() {
  return (
    <div class="grid grid-cols-2 gap-4">
        <div class=" text-5xl text-center">
          <p><strong><em> <br /> <br /> Hi, my name is Michael! <br />I'm a Junior Web Developer</em></strong></p>

          <h2 class="my-4">Junior Fullstack Developer | Junior Frontend Developer</h2>
          <div class="flex  place-content-center	">
          <Link to="../contact"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">Lets talk!</button></Link>
           <Link to="../about"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">About me</button></Link>
          </div>
        </div>
        <div>
          <img class=" h-96 w-200 rounded-lg" src={gif1} alt="" />
        </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /> {/* not a permanent solution... will fix eventually */}
    </div>
    )

  };



export default Home;
