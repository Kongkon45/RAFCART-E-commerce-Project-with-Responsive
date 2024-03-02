import React from "react";

const Cart = ({ products }) => {
  return (
    <div>
      <div className="">
        <img className="rounded-t-lg" src={products?.image} alt="" />
        <div className="shadow-lg pt-4 pl-4">
          <h3 className="text-xl font-semibold ">{products?.title}</h3>
          <p className="text-sm">{products?.desc}</p>
          <p className="text-xl py-2 font-bold text-[#fd3d57]">
            ${products?.price}
          </p>
          <div className="rating gap-2 pb-4">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
        <button className="text-white w-full rounded-b-md bg-[#fd3d57] py-2 px-4 hover:bg-transparent hover:text-black hover:border-2 hover:border-[#fd3d57] animate__animated animate__delay-1s animate__animated animate__fadeIn animate__delay-1s transform hover:scale-100 transition-transform duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Cart;
