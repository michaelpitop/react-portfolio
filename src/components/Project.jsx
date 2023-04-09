// import React from 'react';
// import "../styles.css";

// function Project() {
//       return (
//         <div>
//           <h1>Past Projects</h1>
//           <div class="container">
//             <div class="card"> 1 </div>
//             <div class="card"> 2 </div>
//             <div class="card"> 3 </div>
//           </div>
//         </div>
//        );
// }



// export default Project;

import React from "react";
import { FaGithub, FaBehance, FaYoutube } from "react-icons/fa";

const PortfolioItem = ({ imgUrl }) => {
  return (
    <div className="portfolio-item">
      <div className="imgage">
        <img src={imgUrl} alt="" />
      </div>
      <div className="hover-items">
        <h3 className="text-white font-bold text-2xl mb-4">Project Source</h3>
        <div className="icons">
          <a href="www.google.com" className="icon" target="_blank" rel="noreferrer">
            <FaGithub className="text-white text-3xl hover:text-blue-500 mr-4" />
          </a>
          {/* <a href="#" className="icon" target="_blank" rel="noreferrer">
            <FaBehance className="text-white text-3xl hover:text-blue-500 mr-4" />
          </a>
          <a href="#" className="icon" target="_blank" rel="noreferrer">
            <FaYoutube className="text-white text-3xl hover:text-blue-500 mr-4" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
