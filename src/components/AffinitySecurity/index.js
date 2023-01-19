import React from "react";
import Button from "../common/Button";
import "./affinitySecurity.css";

const AffinitySecurity = () => {
  return (
    <div className="affinity-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
              Security First, and Second.
            </div>
            <div className="photo-section-subheading">
              What’s yours remains only yours.
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
            AFFINITY ensures that all your personal data and transactions are encrypted and secured, so what’s yours remains only yours. There’s no room for mistakes because we didn’t leave any.
            </div>
            <div className="photo-section-button">
              <Button buttonText="Become a Member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffinitySecurity;
