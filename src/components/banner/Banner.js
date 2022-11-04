import React from "react";
import "./banner.css";
import Coffee from "./../../assets/coffee.jpg";
import Horizontal from "./../../assets/whiite.jpg";
import Book from "./../../assets/whiiiiteBox.jpg";

const banner = () => {
  const resume = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="bannerContainer" id="home">
      <div>
        <div className="bannerTextContainer">
          <h1>Kumusta?</h1>
          <p>
            I'm Deb. An aspiring Full-Stack Web Developer from the Philippines.
          </p>
        </div>
        <div>
          <button className="dlButton" onClick={resume} value="download">
            Download CV
          </button>
        </div>
        <div className="displayImages">
          <img src={Coffee} className="coffeeImage" />
          <img src={Horizontal} className="horizontalImage" />
          <img src={Book} className="bookImage" />
        </div>
      </div>
    </div>
  );
};

export default banner;
