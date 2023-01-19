import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./productShowcase.css";
import showcase1 from "./../../assets/showcase1.png";
import showcase2 from "./../../assets/showcase2.png";
import showcase3 from "./../../assets/showcase3.png";
import showcase4 from "./../../assets/showcase4.png";
import showcase5 from "./../../assets/showcase5.png";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      scale-in-bottom
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src={showcase1} alt=""
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src={showcase2} alt=""
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src={showcase3} alt=""
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src={showcase4} alt=""
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src={showcase5} alt=""
            className="showcase-ui showcase-mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
