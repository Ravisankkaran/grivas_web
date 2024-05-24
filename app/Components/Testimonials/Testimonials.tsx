import React, { useState } from 'react';


const Testimonials: React.FC = () =>{
    return(
        

<div className="text-black-600 dark:text-black-300 pt-8 h-screen" id="reviews">

    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

        <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-black-800 dark:text-black md:text-4xl">
                We have some fans
            </h2>
        </div>


        <div className="md:columns-2 lg:columns-3 gap-8 space-y-7">


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src="/assets/man.png"  alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-bold text-black-700 dark:text-black">Daniella Doe</h6>
                    </div>
                </div>
                <p className="mt-8">Choosing GRIVAS Technologies for our smart home needs was the best decision we made. Their expertise in smart home automation, combined with the sleek designs of their products, has truly enhanced our daily lives. From effortless control of our lighting to the convenience of secure door locks, GRIVAS has exceeded our expectations in every way.


                </p>
            </div>

{/* 
            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src="/assets/man (1).png"    alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-bold text-black-700 dark:text-black">Jane doe</h6>
                       
                    </div>
                </div>
                <p className="mt-8"> GRIVAS Technologies has completely transformed our home into a futuristic oasis. Their smart home automation suite is not only incredibly functional but also remarkably user-friendly. We've been particularly impressed with the reliability and efficiency of their automated gate solutions. It's like living in the future, thanks to GRIVAS!
                </p>
            </div> */}


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src="/assets/user.png" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-bold text-black-700 dark:text-black">Yanick Doe</h6>
                   
                    </div>
                </div>
                <p className="mt-8">I can't speak highly enough of GRIVAS Technologies and their dedication to innovation. Their smart home automation suite has added a new level of convenience and security to our household. With their intelligent lighting systems and secure door locks, we feel safer and more in control than ever before. GRIVAS truly sets the standard for modern living
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src="/assets/woman.png"  alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-bold text-black-700 dark:text-black">Jane Doe</h6>
                        
                    </div>
                </div>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                    reprehenderit, veritatis harum et rerum.As a tech enthusiast, I'm always on the lookout for cutting-edge solutions, and GRIVAS Technologies delivered beyond my expectations. Their smart home automation suite, developed in partnership with Ojasvit, is a testament to their commitment to excellence. The seamless integration of their products has made managing our home a breeze. I'm thoroughly impressed and wouldn't hesitate to recommend GRIVAS to anyone.
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src="/assets/gamer.png"  alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-bold text-black-700 dark:text-black">Andy Doe</h6>
                        
                    </div>
                </div>
                <p className="mt-8"> GRIVAS Technologies has made a significant impact on our daily routine. Their smart home automation solutions have not only simplified our lives but also added a touch of luxury to our home. The ability to control everything from lighting to security with just a few taps on our devices is truly remarkable. We're grateful for the expertise and professionalism of the GRIVAS team.
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src="/assets/man.png"  alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-bold text-black-700 dark:text-black">Yanndy Doe</h6>
                        
                    </div>
                </div>
                <p className="mt-8">GRIVAS Technologies has truly raised the bar when it comes to smart home automation. Their attention to detail and commitment to innovation shine through in every aspect of their products. From the moment we installed their suite, our home became more efficient, secure, and enjoyable to live in. The peace of mind that comes with their secure door locks and the convenience of their automated gate solutions have been invaluable additions to our lifestyle. GRIVAS Technologies has exceeded our expectations, and we couldn't be happier with the results.
                </p>
            </div>

        </div>
    </div>
</div>
  
        
    );
}
export default Testimonials;
