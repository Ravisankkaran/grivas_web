import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/Logo.svg";
import Enquiry from "../../../public/assets/Enquiry.svg";
import Menu from "../../../public/assets/Menu.svg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" }
];

// 
function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-10">
      <div className="flex items-center">
        <Image className="lg:hidden md:hidden" src={Logo} alt="Logo" />
        <span className="hidden lg:block md:block">Grivas</span>
      </div>
      <div className="hidden lg:flex md:flex gap-x-[55px]">
        {navLinks.map((item, index) => (
          <a
            href={item.href}
            className="font-medium link-underline text-xl"
            key={index}
            aria-label={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex gap-x-5">
        <div className=" items-center flex gap-x-2">
          <Image className=" lg:hidden md:hidden" src={Enquiry} alt="Enquiry" />
          <a href="#enquire">
            <button className="hidden lg:block md:block bg-[#FF914D] p-2 rounded-md hover:bg-[#36454F]">
              <p className=" text-white font-semibold">Enquire Now</p>
            </button>
          </a>
        </div>
        <div className=" lg:hidden md:hidden">
          <Image src={Menu} alt="Menu" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;