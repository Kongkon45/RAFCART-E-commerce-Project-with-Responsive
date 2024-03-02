import React from "react";
import offer1 from "../../../assets/images/sofa-1.png";
import offer2 from "../../../assets/images/sofa-2.png"

const Discount = () => {
  return (
    <div className="lg:flex gap-8 pb-8 pt-4">
      <div className="lg:w-1/2 sm:w-full my-4 flex justify-center items-center bg-[#fbe3e4] px-8 py-2 rounded-sm">
        <div className="w-1/2">
          <h3 className="text-[#fd3d57] text-md font-semibold">30% Offer</h3>
          <h2 className="text-xl font-semibold">Free Shipping</h2>
          <p className="text-sm mb-4">Attractive Natural Furniture</p>
          <button className="text-white bg-[#fd3d57] py-2 px-4 rounded-md hover:bg-transparent hover:text-black hover:border-2 hover:border-[#fd3d57] animate__animated animate__delay-1s animate__animated animate__fadeIn animate__delay-1s transform hover:scale-110 transition-transform duration-300">
            SHOP NOW
          </button>
        </div>
        <div className="w-1/2">
          <img className="w-full h-full transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s" src={offer1} alt="sofa1" />
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full my-4 flex justify-center items-center bg-[#edecec] px-8 py-2 rounded-sm">
        <div className="w-1/2">
          <h3 className="text-[#fd3d57] text-md font-semibold">50% Offer</h3>
          <h2 className="text-xl font-semibold">Flash Sale</h2>
          <p className="text-sm mb-4">Attractive Natural Furniture</p>
          <button className="text-white bg-[#fd3d57] py-2 px-4 rounded-md hover:bg-transparent hover:text-black hover:border-2 hover:border-[#fd3d57] animate__animated animate__delay-1s animate__animated animate__fadeIn animate__delay-1s transform hover:scale-110 transition-transform duration-300">
            SHOP NOW
          </button>
        </div>
        <div className="w-1/2">
          <img className="w-full h-full transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s" src={offer2} alt="sofa1" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
