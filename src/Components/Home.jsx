/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfoliomain.jpg";
import front from "../images/man1.jpg";
const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";
const frontImageAltText = "Description of the front image";

const Home = ({ name, title, gitHub }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", textAlign: "center" }}>
      
      <img className="background" src={image} alt={imageAltText} style={{ width: "100%", height: "auto", display: "block" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        {gitHub && (
          <p>
            <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
              GitHub: {gitHub}
            </a>
          </p>
        )}
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down" />
      </div>
      <img src={front} alt={frontImageAltText} style={{ position: "absolute", bottom: "10px", right: "10px", height: "350px", width: "350px" }} />
    </section>
  );
};
Home.defaultProps = {
  name: "",
  title: "",
  Github: ""
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
