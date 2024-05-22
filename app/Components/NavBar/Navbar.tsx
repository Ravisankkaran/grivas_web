import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/Logo.svg";
import Enquiry from "../../../public/assets/Enquiry.svg";
import Menu from "../../../public/assets/Menu.svg";

const navLinks = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Products" },
  { name: "Testimonials" },
];

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-10">
      <div className="flex items-center">
        <Image className="lg:hidden md:hidden" src={Logo} alt="Logo" />
        <span className="hidden lg:block md:block">Grivas</span>
      </div>
      <div className="hidden lg:flex md:flex gap-x-[55px]">
        {navLinks.map((item, index) => (
          <a href="#" className="font-medium link-underline" key={index}>
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex gap-x-5">
        <div className=" items-center flex gap-x-2">
          <Image className=" lg:hidden md:hidden" src={Enquiry} alt="Enquiry" />
          <button className="hidden lg:block md:block bg-orange p-2 rounded-md hover:bg-charcoal">
            <p className=" text-white font-semibold">
            Enquire Now
            </p>
          </button>
        </div>
        <div className=" lg:hidden md:hidden">
          <Image src={Menu} alt="Menu" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
