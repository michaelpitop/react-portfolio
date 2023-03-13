import React from "react";
import "../styles.css";
// import pic1 from "../assets/pictures/gaidouronisi.jpg"
import {Link} from "react-router-dom";


function Text1() {

  return (
    <div class="relative w-screen -inset-x-40	 h-screen grid	place-items-center text-center text-white  bg-no-repeat bg-center bg-[url('/home/michaelpitop/code/michaelpitop/react-portfolio/src/assets/pictures/leuka_ori.jpg')]">
        <p>Hi! My name is Michael
          <br /> I build amazing websites</p>
          <button class="border"><Link to="./contact">Contact</Link></button>
    </div>
  );
}

export default Text1;
