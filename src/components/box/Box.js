import React from "react";
import "./box.css";

const box = (props) => {
  const { image, name, details, technicalSheet } = props.info;

  return (
    <div className="box" id="projects">
      <div className="imageContainer">
        <img src={image} />
      </div>
      <div className="textContainer">
        <h3>{name}</h3>
        <p>{details}</p>
        {technicalSheet?.length > 0 ? (
          <>
            <h4>Technical Sheet:</h4>
            <ul>
              {technicalSheet.map((sheet) => {
                return <li>{sheet}</li>;
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default box;
