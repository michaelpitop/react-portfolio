import React,{ useState, useEffect }  from "react";
// import Contact from "./Contact";
// import Project from "./Project";
import {Link} from "react-router-dom";
import "../styles.css";


function Navbar() {
  return (
    <nav>
      <div class="pr-6 flex gap-3 justify-end text-white font-bold">
          <div class="hover:bg-sky-700"><Link to="/">Home</Link></div>
          <div class="hover:bg-sky-700"><Link to="./about">About</Link></div>
          <div class="hover:bg-sky-700"><Link to="./project">Projects</Link></div>
          <div class="hover:bg-sky-700"><Link to="./contact">Contact</Link></div>
      </div>
    </nav>
  );
}
export default Navbar;
// export default function Navbar() {
//   const [stickyClass, setStickyClass] = useState('relative');

//   useEffect(() => {
//     window.addEventListener('scroll', stickNavbar);

//     return () => {
//       window.removeEventListener('scroll', stickNavbar);
//     };
//   }, []);

//   const stickNavbar = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 500 ? setStickyClass('fixed top-0 left-20 z-50') : setStickyClass('relative');
//     }
//   };

//   return <div className={`h-16 w-full  ${stickyClass}`}>
//       <div class="flex gap-3 justify-end text-white font-bold">
//           <div class="hover:bg-sky-700"><Link to="/">Home</Link></div>
//           <div><Link to="./about">About</Link></div>
//           <div><Link to="./project">Projects</Link></div>
//           <div><Link to="./contact">Contact</Link></div>
//       </div>
//   </div>;
// }
