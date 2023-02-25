import React from 'react';
import Certs from '../components/Certs';
import Contact from '../components/Contact';
import Text1 from '../components/Text1';
// import Layout from '../components/Layout';
// import NoPage from "../components/NoPage"

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
    <div>
      <Text1 />
      <Certs />
      <Contact />
    </div>
  )

  };



export default Home;
