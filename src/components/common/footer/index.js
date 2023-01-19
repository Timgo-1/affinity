import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer flex absolute-center max-width">
      Made with 🔥  
      <p>
         By{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.timzport.ml"
        >
          Timgo Designs
        </a>
      </p>
    </div>
  );
};

export default Footer;
