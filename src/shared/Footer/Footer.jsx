import React from "react";
import visa from '../../../src/assets/images/visa.png'
import skrill from '../../../src/assets/images/skrill.png'
import paypal from '../../../src/assets/images/paypal.png'
import electron from '../../../src/assets/images/visa_electron.png'

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container">
      <footer className="footer p-10 text-base-content">
        <form>
          <h2 className="text-[#fd3d57] text-3xl font-bold">RAf<span>CART</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quia culpa impedit, ex ullam officia consequuntur vero.</p>
          <h6 className="footer-title text-xl text-black">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="text-white bg-[#fd3d57] lg:text-xl text-sm lg:font-semibold lg:py-2 lg:px-4 py-1 px-2 rounded-r-md hover:bg-transparent hover:text-[#fd3d57] hover:border-2 hover:border-[#fd3d57] animate__animated animate__delay-1s animate__animated animate__fadeIn animate__delay-1s transform hover:scale-100 transition-transform duration-300">
            SUBSCRIBE
          </button>
            </div>
          </fieldset>
        </form>
        <nav className="mt-12">
          <h6 className="footer-title text-black text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="mt-12">
          <h6 className="footer-title text-black text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="mt-12">
          <h6 className="footer-title text-black text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      {/* bottom footer  */}

      <div className="bg-black text-white py-2">
        <div className="container  flex justify-around items-center">
            <p>© RAFCART - All Rights Reserved</p>
            <div className="flex ">
                <img className="w-20 h-16 mx-3" src={visa} alt="visa cart" />
                <img className="w-20 h-16 mx-3" src={skrill} alt="skrill cart" />
                <img className="w-20 h-16 mx-3" src={paypal} alt="paypal cart" />
                <img className="w-20 h-16 mx-3" src={electron} alt="visa electron" />
            </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Footer;
