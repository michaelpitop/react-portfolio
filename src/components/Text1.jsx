import React from "react";
import "../styles.css";
// import pic1 from "../assets/pictures/gaidouronisi.jpg"
import {Link} from "react-router-dom";


function Text1() {

  return (

    <div class="relative w-screen -inset-x-40	 h-screen grid	place-items-center text-center text-white  bg-no-repeat bg-center bg-[url('/home/michaelpitop/code/michaelpitop/react-portfolio/src/assets/pictures/leuka_ori.jpg')]">
        <p>Hi! My name is Michael
          <br /> I build amazing websites</p>
          <div class="grid grid-cols-2 gap-4">
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="./about">About</Link></button>
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="./contact">Contact</Link></button>
          </div>
    </div>
  );
}

export default Text1;
