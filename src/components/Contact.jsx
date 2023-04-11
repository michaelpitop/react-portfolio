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
    <section class="bg-white dark:bg-gray-900 rounded-lg">
      <div>
        <div class='flex text-[50px]  my-5 justify-center text-white'>
          <p><strong><em>My relevant links</em></strong></p>
        </div>
        <div class='flex gap-9 flex-wrap	text-[40px] basis-10 justify-center	text-white'>
          <a class="hover:text-sky-400" href="https://michaelpitop.tiiny.site/">Download my CV</a>
          <a class="hover:text-sky-400" href="https://github.com/michaelpitop/">My GitHub page</a>
          <a class="hover:text-sky-400" href="https://www.linkedin.com/in/michaelpitop/">LinkedIn Profile</a>

        </div>
      </div>

      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Or send me an email</h2>
          {/* <p class="mt-auto flex inline-block gap-2 justify-center text-white p-4   mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">or contact me via <a href="https://www.linkedin.com/in/michaelpitop/" > Linked </a> <a href="https://www.linkedin.com/in/michaelpitop/" class="flex self-center"><BsLinkedin /></a></p> */}
          <form ref={form} onSubmit={sendEmail} class="space-y-8">
              <div>
                  <input type="email" name="user_email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email" required />
              </div>
              <div>
                  <input type="text" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject" required />
              </div>
              <div class="sm:col-span-2">
                  <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message"></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
      </div>
    </section>
  );
};

export default Contact;
