import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

import vision from "../../../assets/images/about-img-2.jpg";
const Vision = () => {
  return (
    <div className="lg:flex gap-16">
      <div className="lg:w-2/5 w-full my-10">
        <img src={vision} alt="" />
      </div>
      <div className="lg:w-3/5 w-full my-10">
        <h3 className="text-[#fd3d57] text-xl font-semibold pb-4">
        OUR VISION
        </h3>
        <h2 className="text-2xl font-semibold text-black pb-4">
        OUR VISION IS SIMPLE - WE EXIST TO <br />
        ACCELERATE OUR CUSTOMERS' PROGRESS
        </h2>
        <p className="pb-10">
        we design and deliver our customers' digital transformation by bringing together their <br />vision with our industry knowledge and deep technological expertise. we design and deliver <br />our customers' digital transformation
        </p>

        <div>
            <div className="flex gap-4 items-center">
                <span className="text-[#fd3d57]"><FaRegThumbsUp /></span>
                <p>We build strong relationships</p>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-[#fd3d57]"><FaRegThumbsUp /></span>
                <p>We encourage initiative and provide opportunity</p>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-[#fd3d57]"><FaRegThumbsUp /></span>
                <p>We embrace change and creativity</p>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-[#fd3d57]"><FaRegThumbsUp /></span>
                <p>We champion an environment of honesty</p>
            </div>
        </div>

        
      </div>
    </div>
  );
};

export default Vision;
