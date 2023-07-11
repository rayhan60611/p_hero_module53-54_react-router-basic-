// import React from "react";
// import Styles from "./Navbar.module.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-center  bg-slate-600 p-2 text-white duration-500 md:items-start relative">
      <div onClick={() => setOpen(!open)} className="md:hidden ">
        {open ? (
          <XMarkIcon className="h-8 w-8 font-bold text-white "></XMarkIcon>
        ) : (
          <Bars3Icon className="h-8 w-8 font-bold text-white  "></Bars3Icon>
        )}
      </div>

      <nav
        className={`absolute md:static flex flex-col md:flex-row gap-8 justify-center bg-slate-600 text-white duration-500 items-center w-full pb-6 md:py-2  ${
          !open ? "-top-96 left-0 " : "top-12 left-0 "
        }`}
      >
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-700 hover:scale-105   text-center"
          href="/"
        >
          Home
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-700 hover:scale-105"
          href="/service"
        >
          Service
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-700 hover:scale-105"
          href="/contact-us"
        >
          Contact Us
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-700 hover:scale-105"
          href="/about-us"
        >
          About Us
        </a>
        <button className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 px-4 duration-700 hover:scale-105 border-white border-[1px]">
          Try Now!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
