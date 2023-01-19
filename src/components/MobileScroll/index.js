import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "We’ve got Your Back.",
    description:
      "Gain complete control over your credit card with AFFINITY Protect. Receive category-based analysis of your spendings, detect hidden charges, and track your credit limit in real-time.",
    mobile_img:
      "/images/fold1.png",
  },
  {
    heading: "Begin Your Winning Streak.",
    description:
      "Use your AFFINITY coins to participate in games and raffles to win the most exclusive rewards and cashbacks on AFFINITY. Good luck.",
    mobile_img:
      "/images/fold2.png",
  },
  {
    heading: "For Your Eclectic Taste.",
    description:
      "Get access to the AFFINITY Store, a member-exclusive selection of products and experiences at special prices that complement your taste. This is the good life they speak of.",
    mobile_img:
      "/images/fold3.png",
  },
  {
    heading: "More Cash in Your Pockets.",
    description:
      "Switch to AFFINITY RentPay and start paying rent with your credit card. This way, you get up to 45 days of credit free period, more reward points and a happy landlord.",
    mobile_img:
    "/images/fold4.png",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right"
              key={scrollData[currentImg].mobile_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
