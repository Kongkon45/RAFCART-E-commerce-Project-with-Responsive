import React from "react";
import History from "../History/History";
import Banner from "../Banner/Banner";
import Vision from "../Vision/Vision";
import Team from "../Team/Team";
import Partner from "../Partner/Partner";

const About_Us = () => {
  return (
    <div>
      <Banner />
      <div className="container lg:px-10 md:px-0">
        <History />
        <Vision/>
        <Team/>
        <Partner/>
      </div>
    </div>
  );
};

export default About_Us;
