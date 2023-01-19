import React from "react";
import Button from "../common/Button";
import "./feelSpecial.css";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
              Feel Special More Often
            </div>
            <div className="photo-section-subheading">
              Exclusive rewards for paying your bills.
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              Every time you pay your credit card bills on AFFINITY, you receive
              AFFINITY coins. You can use these to win exclusive rewards or get
              special access to curated products and experiences. On AFFINITY, good
              begets good.
            </div>
            <div className="photo-section-button">
              <Button buttonText="Explore Rewards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
