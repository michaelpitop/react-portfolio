import React from 'react';
import "../styles.css";
import rwd from "../assets/certs/rwd.png";
import jaads from "../assets/certs/jaads.png";
import fedl from "../assets/certs/fedl.png";
import diploma from "../assets/certs/diploma.png"

function Certs() {
  return (
    <div class="grid grid-cols-4 gap-4">
      <div ><a href="https://www.freecodecamp.org/certification/michaelpitop/responsive-web-design"><img src={rwd} alt='Responsive Web Design' /></a></div>
      <div ><a href="https://freecodecamp.org/certification/michaelpitop/front-end-development-libraries"><img src={fedl} alt="Front End Development Libraries" /> </a></div>
      <div ><a href="https://www.freecodecamp.org/certification/michaelpitop/javascript-algorithms-and-data-structures"><img src={jaads} alt="JavaScript Algorithms and Data Structures" /> </a></div>
      <div ><a href="https://kitt.lewagon.com/schoolings/15683/public_diploma?token=ba7a269adc951a523107c55ef0338f1a4eee4d4e59173ab30cf5010d051f7fcf"> <img src={diploma} alt="Le Wagon Munich Full stack web development bootcamp" /> </a></div>
    </div>
  );
}

export default Certs;
