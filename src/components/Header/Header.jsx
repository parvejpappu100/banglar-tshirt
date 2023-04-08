import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import './Header.css'

const Header = () => {
  const [open, setOpen] = useState();
  return (
    <div>
      <div className="lg:container mx-auto  p-2 lg:text-white ema-jon-nav-bar">
        <div className="flex flex-row-reverse items-center justify-between">
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <span>
              {open === true ? (
                <XMarkIcon className="h-10 w-10 text-white" />
              ) : (
                <Bars3Icon className="h-10 w-10 text-white" />
              )}
            </span>
          </button>
          <h4 className="lg:hidden text-2xl text-white">T-Shirt</h4>
        </div>
        <nav className="flex items-center justify-between">
          <h4 className="hidden lg:block text-2xl">T-Shirt</h4>
          <ul
            className={`menu-bar-item z-50 rounded-bl-md lg:flex gap-5 text-xl absolute lg:static duration-500 ${
              open ? `top-14 right-0` : `-top-40 right-0`
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
