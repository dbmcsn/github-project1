import React from "react";
import "./banner.css";
import Coffee from "./../../assets/coffee.jpg";
import Horizontal from "./../../assets/whiite.jpg";
import Book from "./../../assets/whiiiiteBox.jpg";
import Vertical from "./../../assets/whiiite.jpg";

const banner = () => {
  return (
    <div className="bannerContainer" id="home">
      <div>
        <div className="bannerTextContainer">
          <h1>Kumusta?</h1>
          <p>
            I'm Deb. An aspiring Full-Stack Web Developer from the Philippines.
          </p>
        </div>
        <div className="displayImages">
          <img src={Coffee} className="coffeeImage" />
          <img src={Horizontal} className="horizontalImage" />
          <img src={Book} className="bookImage" />
        </div>
      </div>
      <div>
        <img src={Vertical} className="verticalImage" />
      </div>
    </div>
  );
};

export default banner;
