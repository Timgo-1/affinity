import React from "react";
import Button from "../common/Button";
import "./heroSection.css";
import arrow from "./../../assets/arrow.png";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>Pay Credit Card Bill. Earn Guaranteed $200 Back.</div>
        <div className="claim-anchor">
          Claim Now
          <img
            src={arrow} alt=""
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          Rewards for Paying Credit Card Bills
        </div>
        <div className="hero-subheading">
          Join 8.3M+ members who win rewards and cashbacks everyday.
        </div>
        <Button buttonText="Download AFFINITY" />
      </div>
    </div>
  );
};

export default HeroSection;
