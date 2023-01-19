import React from "react";
import Button from "../common/Button";
import "./appRating.css";
import appstore from "./../../assets/appstore.png";
import playstore from "./../../assets/playstore.png";
import stars from "./../../assets/stars.png";
import rating from "./../../assets/rating.png";

const getIosPrefix = () => {
  return (
    <img
      src={appstore} alt=""
      className="app-rating-icon"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src={playstore} alt=""
      className="app-rating-icon"
    />
  );
};
const AppRating = () => {
  return (
    <div className="max-width app-rating flex">
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.9
            <img
              src={stars} alt=""
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            App <br /> Store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getIosPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src={rating} alt=""
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            Play <br /> Store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getAndroidPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the App" />
      </div>
    </div>
  );
};

export default AppRating;
