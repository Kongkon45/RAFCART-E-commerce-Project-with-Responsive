import React from "react";
import { IoMenu } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white sticky top-0 z-50">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <NavLink to='/' activeClassName='text-white' style={{background:"none"}}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/shop' activeClassName='text-white' style={{background:"none"}}>Shop</NavLink>
              </li>
              <li>
                <NavLink to='/about_us' activeClassName='text-white' style={{background:"none"}}>About_Us</NavLink>
              </li>
              <li>
                <NavLink to='/contact' activeClassName='text-white' style={{background:"none"}}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <Link className="flex justify-center items-center gap-3 text-white bg-[#fd3d57] py-2 px-4 rounded-md hover:bg-transparent hover:text-[#fd3d57] hover:border-2 hover:border-[#fd3d57] animate__animated animate__delay-1s animate__animated animate__fadeIn animate__delay-1s transform hover:scale-105 transition-transform duration-300"><span><IoMenu /></span> All Categories</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to='/' activeClassName='text-white' style={{background:"none"}}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop' activeClassName='text-white' style={{background:"none"}}>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/about_us' activeClassName='text-white' style={{background:"none"}}>About_Us</NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName='text-white' style={{background:"none"}}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="flex justify-center items-center gap-2 text-white bg-[#fd3d57] py-2 px-4 rounded-md hover:bg-transparent hover:text-[#fd3d57] hover:border-2 hover:border-[#fd3d57] animate__animated animate__delay-1s animate__animated animate__fadeIn animate__delay-1s transform hover:scale-110 transition-transform duration-300"><span><BsTelephoneFill /></span> call: +123 456 7890</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
