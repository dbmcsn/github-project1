import React from "react";
import "./box.css";

const box = (props) => {
  const { image, name, details, technicalSheet, Link, Github } = props.info;

  return (
    <div className="box" id="projects">
      <div className="imageContainer">
        <a href={Link} target="_blank" rel="noopener">
          <img src={image} />
        </a>
      </div>
      <div className="textContainer">
        <h3>
          <a href={Link} target="_blank" rel="noopener">
            {name}
          </a>
        </h3>
        <p>{details}</p>
        <div className="github">
          <h4>Github:</h4>
          <a href={Github} target="_blank" rel="noopener">
            {Github}
          </a>
        </div>
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
