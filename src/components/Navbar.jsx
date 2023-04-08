// import React,{ useState, useEffect }  from "react";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav>
      <div class="flex grid-rows-4	 gap-3 justify-end  text-white font-bold">
          <div class="hover:scale-110"><Link to="/">Home</Link></div>
          <div class="hover:scale-110"><Link to="./about">About me</Link></div>
          <div class="hover:scale-110"><Link to="./project">Projects</Link></div>
          <div class="hover:scale-110"><Link to="./contact">Contact</Link></div>
      </div>
    </nav>
  );
}
export default Navbar;
