import React from 'react';

const Enquire: React.FC = () => {
  return (
//     <div className='enquire'>
//       <h1 className='contact'>Contact Us</h1>
//       <div className="contact-grid">
//       <h2 className="contact">How To Find us</h2>
//       <h3 className='about'><span className='txt'><span><br/></span>"GRIVAS Technologies excels in cutting-edge lgart Home Automation and innovative solutions for School Student Safety and Administration. In collaboration with Ojasvit for lgart home automation and School Guard for student safety, we deliver unparalleled excellence. Our lgart Home Automation suite encompasses advanced features such as intelligent lighting systems, automated gate solutions, and secure door locks, redefining modern living. Complementing this, our Schoolguard solution integrates state-of-the-art BLE Technology, providing seamless monitoring for school buses and campuses. Elevate your lifestyle and safety standards with GRIVAS Technologies."<span><br/><br/></span></span>
//     <span style={{ fontWeight: 'bold' }}> Address:</span> 53, 1st Floor, Velachery Main Rd, Mehta Nagar,<span><br/></span> Selaiyur, Chennai, Tamil Nadu 600073<span><br/></span>

// <span style={{ fontWeight: 'bold' }}>Phone:</span>070102 58295<span style={{ fontWeight: 'bold' }}><br/>Email Address:</span>grivas.techno@gmail.com </h3>
// </div>
//       <label className="btn-open" htmlFor="frmContactForm">
//         <i className="far fa-envelope"></i>
//         <span className="ml-half">Open Form</span>
//       </label>
      
//       <input type="checkbox" id="frmContactForm" />
//       <div className="contact-modal">
//         <div className="contact-form">
//           <form>
//             <div className="contact-wrapper">
//               <div className="contact-section">
//                 <h2 className="p-none m-none mb-quarter text-white">
//                   <i className="far fa-envelope"></i>
//                   <span className="ml-half">Contact Me</span>
//                 </h2>
//               </div>
//               <div className="contact-section">
//                 <div className="form-item">
//                   <input id="txtFullName" type="text" placeholder="Full Name (Optional)" />
//                   <label className="lbl-floating" htmlFor="txtFullName">Full Name (Optional)</label>
//                   <i className="icon text-white fas fa-user"></i>
//                 </div>
//                 <div className="form-item">
//                   <input id="txtEmail" type="email" placeholder="E-Mail Address" />
//                   <label className="lbl-floating" htmlFor="txtEmail">E-Mail Address</label>
//                   <i className="icon text-white fas fa-at"></i>
//                 </div>
//                 <div className="form-item">
//                   <textarea id="txtContent" placeholder="Your message to the developer" rows={5}></textarea>
//                   <label className="lbl-floating" htmlFor="txtContent">Your message to the developer</label>
//                   <i className="icon text-white far fa-comment"></i>
//                 </div>
//               </div>
//               <div className="contact-section text-right">
//                 <label className="contact-cancel" htmlFor="frmContactForm">
//                   <i className="fas fa-times-circle"></i>
//                   <span className="ml-quarter">Cancel</span>
//                 </label>
//                 <button className="btn-open ml-whole" type="button">
//                   <i className="far fa-paper-plane"></i>
//                   <span className="ml-half">Send</span>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>

<section className=" mt-10 ml-10 mr-4">
    {/* <div className="container px-6 py-12 mx-auto"> */}
        < div className="text-center text-2xl font-bold text-gray-800 dark:text-black md:text-4lg">
        <h2>
        Chat to our friendly team
        </h2>


            {/* <h1 className="mt-2 text-2lg font-semibold text-gray-800 md:text-3lg dark:text-white">Chat to our friendly team</h1> */}

            <p ></p>
        </div>
        <div><br/><p className="font-large text-center text-blue-500 dark:text-blue-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
</div>
        <div className="grid mt-5 grid-cols-1 gap-  lg:grid-cols-2">
            <div className="grid mt-5 grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block  p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-1 text-xl font-bold font-large text-gray-800 dark:text-black">Email</h2>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p className="mt-2 text-lg text-blue-500 dark:text-blue-400">grivas.techno@gmail.com</p>
                </div>

                <div>
                    <span className="inline-block  p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className=" text-xl font-bold font-large text-gray-800 dark:text-black">Live chat</h2>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p className="mt-2 text-lg text-blue-500 dark:text-blue-400">Start new chat</p>
                </div>

                <div>
                    <span className="inline-block p-3  text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-1 text-xl font-bold font-large text-gray-800 dark:text-black">Office</h2>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-lg text-blue-500 dark:text-blue-400"> 53, 1st Floor, Velachery Main Rd, Mehta Nagar,Selaiyur, Chennai, Tamil Nadu 600073</p>
                </div>

                <div>
                    <span className="inline-block p-3 mt-2 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-1 text-xl font-bold font-large text-gray-800 dark:text-black">Phone</h2>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-lg text-blue-500 dark:text-blue-400">+91 70102 58295</p>
                </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-lg font-bold text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-lg font-bold text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-lg font-bold text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-lg font-bold text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-xl font-bold tracking-wide text-black capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-black-400 border-black focus:outline-none focus:ring focus:ring-black-300 focus:ring-opacity-0">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    {/* </div> */}
</section>
  );
};

export default Enquire;
