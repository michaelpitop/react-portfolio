// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles.css";


// function Contact() {
//       return (
//         <div class="align-content center">
//           <div class="wrapper flex justify-center  py-16 gap-52 lg:py-12">
//             <h1>this is the contact page</h1>
//           </div>
//           <div class="cont-card">
//             <h2>and this a h2 element</h2>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem incidunt sint illo excepturi totam! Laboriosam maiores distinctio saepe voluptatum nam possimus porro ratione eos natus. Alias eum aperiam eius eaque?</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem ducimus, voluptate ut explicabo doloribus perferendis non perspiciatis asperiores et totam commodi rem ipsam aperiam. Molestiae laboriosam a facere autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur beatae atque eum pariatur eveniet sequi, ipsa corrupti blanditiis incidunt sit aut possimus adipisci magni? Qui itaque tenetur natus explicabo earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa distinctio nisi qui modi impedit iure consectetur nostrum esse quas quod mollitia aliquam aspernatur, aut accusamus. Quae aperiam unde accusamus. Molestias.</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur incidunt quo alias adipisci libero eaque, mollitia, culpa, commodi minus architecto recusandae maiores ullam repellendus ipsum ab harum iste beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sint at voluptates itaque cupiditate porro dignissimos error impedit ipsam labore facere, nisi accusamus facilis consectetur reiciendis omnis rem quas iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A reprehenderit dicta maxime asperiores quos id sint et illo, quibusdam alias, aperiam voluptatum optio possimus molestiae quisquam, error explicabo dignissimos corporis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cupiditate consectetur cum. Eveniet consequatur voluptatem dicta nisi libero praesentium tempore odio rerum veritatis reiciendis culpa eos, ex incidunt, deserunt aliquam?</p>
//           </div>
//         </div>
//         );
// }

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const [loader, setLoader] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);

//     // db.collection("contacts")
//     //   .add({
//     //     name: name,
//     //     email: email,
//     //     message: message,
//     //   })
//       // .then(() => {
//       //   setLoader(false);
//       //   alert("Your message has been submitted");
//       // })
//       // .catch((error) => {
//       //   alert(error.message);
//       //   setLoader(false);
//       // });

//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <h1>Get in touch!</h1>

//       <label>Name</label>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>Email</label>
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label>Message</label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>

//       <button
//         type="submit"
//         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t4ypoto', 'template_d4f3md3', form.current, 'Ny6Zm7UXnJ76YVv5D')
    .then((result) => {
      console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
