import React from "react";
import history from "../../../assets/images/about-img.jpg";
const History = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-3/5 w-full my-10">
        <h3 className="text-[#fd3d57] text-xl font-semibold pb-4">OUR HISTORY</h3>
        <h2 className="text-2xl font-semibold text-black pb-4">CREATIVE AND NEW FASHION <br />
            TRENDS COLLECTION</h2>
        <p className="pb-10">Fashion is a potent visual marker of our times,” says Caroline Stevenson, head of <br /> cultural and ... “Trend analysis of any given era will reveal society's values and <br />aspirations.” ... The urge to creative expression runs deep </p>

        <div className="flex gap-12">
          <div>
            <h2 className="text-[#fd3d57] text-3xl font-semibold pb-4">12</h2>
            <p className="text-md">Years Exprience</p>
          </div>
          <div>
            <h2 className="text-[#fd3d57] text-3xl font-semibold pb-4">20K</h2>
            <p className="text-md">Happy Customer</p>
          </div>
          <div>
            <h2 className="text-[#fd3d57] text-3xl font-semibold pb-4">100%</h2>
            <p className="text-md">Clients Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full my-10">
        <img src={history} alt="" />
      </div>
    </div>
  );
};

export default History;
