import React from "react";
import Button from "../common/Button";
import "./affinityExperience.css";

const AffinityExperience = () => {
  return (
    <div className="affinity-experience photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading affinity-experience-heading">
              We Take Your Money Matters Seriously
            </div>
            <div className="photo-section-subheading">
              You don’t have to worry.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description affinity-experience-description">
              Never miss a due date with reminders to help you pay your bills on
              time. Instant settlements means you never have to wait for your payments to
              go through, as statement analysis lets you know where your money
              goes, always.
            </div>
            <div className="photo-section-button">
              <Button buttonText="Experience the Upgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffinityExperience;
