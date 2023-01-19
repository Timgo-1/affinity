import React from "react";
import "./affinityStory.css";

const AffinityStory = () => {
  return (
    <div className="affinity-story flex absolute-center">
      <div className="max-width flex story-wrapper">
        <div className="flex affinity-story-heading-wrapper">
          <div className="affinity-story-heading">
            The story of AFFINITY Begins with Trust.
          </div>
        </div>
        <div className="affinity-story-detail">
          <div className="affinity-story-para">
            Trust as a virtue has consistently played an essential role in every
            great human achievement and invariably, its importance has been
            overlooked, not just by individuals, but by entire societies. We
            felt it was time someone gave it the spotlight it deserves,
            especially for the ones who live by this virtue: the Trustworthy.
          </div>
          <div className="affinity-story-para">
            Thus, we thought of creating a system that rewards its members for
            doing good and being trustworthy. This way, trust as a virtue
            becomes something to aspire to, just the way it should be. Subsequently, we
            went one step ahead: we built it. We know we are on the right track
            because here you are.
          </div>
          <div className="affinity-story-para">
            If you make it to AFFINITY, congratulations and welcome. We have a lot
            of things planned for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffinityStory;
