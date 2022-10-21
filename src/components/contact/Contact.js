import React from "react";
import { useState } from "react";
import "./contact.css";
import { Email, Location, Phone } from "../../assets";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.valuee);
  }

  return (
    <div className="contactContainer" id="contact">
      <h1>Contact Me</h1>
      <div className="contactTextContainer">
        {/*CONTACT FORM*/}
        <div className="contactForm">
          <form>
            <label>
              Your Name:
              <input
                type="text"
                name="fname"
                className="contactFormBox"
                value={value}
                onChange={handleChange}
              />
            </label>
            <label>
              Your Email/Contact Number:
              <input
                type="text"
                name="name"
                className="contactFormBox"
                value={value}
                onChange={handleChange}
              />
            </label>
            <label>
              Your Message:
              <input
                type="text"
                name="name"
                className="contactFormBox"
                value={value}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              value="Submit"
              className="btn"
              disabled={!value}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="contactInfoContainer">
          {/*CONTACT INFO*/}
          <div className="contactInfo">
            <div className="contactInfoItem">
              <img src={Email} className="contactInfoIcon" />
              <div className="contactInfoText">
                <h3>Email</h3>
                <p>dbmacasiano@yahoo.com</p>
              </div>
            </div>

            <div className="contactInfoItem">
              <img src={Phone} className="contactInfoIcon" />
              <div className="contactInfoText">
                <h3>Contact Number</h3>
                <p>+63-906-055-9393</p>
              </div>
            </div>

            <div className="contactInfoItem">
              <img src={Location} className="contactInfoIcon" />
              <div className="contactInfoText">
                <h3>Location</h3>
                <p>Muntinlupa City, Philippines </p>
              </div>
            </div>
          </div>

          {/*SOCIAL MEDIA*/}
          <div class="socialMedia">
            <SocialIcon
              url="https://facebook.com/debmcsn"
              target="_blank"
              className="socialIcon"
            />
            <SocialIcon
              url="https://instagram.com/dbmcsn"
              target="_blank"
              className="socialIcon"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/debbie-macasiano"
              target="_blank"
              className="socialIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
