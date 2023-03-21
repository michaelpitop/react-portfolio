import React from 'react';
// import Text1 from '../components/Text1';
import "../styles.css";
// import Layout from '../components/Layout';
// import NoPage from "../components/NoPage"
import {Link} from "react-router-dom";


// function Home() {
//     return (
//        <>
//         <Layout />
//        </>
//     );
// }

function Home() {
  return (
    // <div>
    //   <h1>Hello! My name is Michael Pitopoulakis and I'm a junior web developer</h1>
    //   <h2>Originally from Crete, Greece and currently residing in the Greater Metro area of Munich. Newcomer to the industry with a lot of passion and ready to tackle new challenges</h2>
    //   <p><b>here are all my links <a href="https://www.linkedin.com/in/michaelpitop/">LinkedIn</a> <a href="https://github.com/michaelpitop">GitHub</a></b></p>
    // </div>
    // <div>
    //   <Text1 />
    // </div>
    <div class="p-1 full-screen bg-home">

    Hi! My name is Michael Pitopoulakis!

      <div class="grid grid-cols-2 gap-4">
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="./about">About me</Link></button>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="./contact">Lets talk!</Link></button>
      </div>

    </div>


    )

  };



export default Home;
