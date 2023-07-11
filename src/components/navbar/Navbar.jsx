// import React from "react";
// import Styles from "./Navbar.module.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-center  bg-slate-600 p-2 text-white duration-500 md:items-start relative ">
      <div onClick={() => setOpen(!open)} className="md:hidden z-10 ">
        {open ? (
          <XMarkIcon className="h-8 w-8 font-bold text-white duration-700 animate-spin"></XMarkIcon>
        ) : (
          <Bars3Icon className="h-8 w-8 font-bold text-white  duration-700 hover:rotate-"></Bars3Icon>
        )}
      </div>

      <nav
        className={`absolute md:static flex flex-col md:flex-row gap-8 justify-center bg-slate-600 text-white duration-500 items-center w-full pb-6 md:py-2  ${
          !open ? "-top-96 left-0 " : "top-12 left-0 "
        }`}
      >
        <Link
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-500 hover:scale-105 text-center"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-500 hover:scale-105"
          to="/users"
        >
          Users
        </Link>
        <Link
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-500 hover:scale-105"
          to="/contact-us"
        >
          Contact Us
        </Link>
        <Link
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 duration-500 hover:scale-105"
          to="/about-us"
        >
          About Us
        </Link>
        <button className="font-semibold text-2xl md:text-[16px] rounded hover:bg-slate-700  p-2 px-4 duration-500 hover:scale-105 border-white border-[1px]">
          Try Now!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
