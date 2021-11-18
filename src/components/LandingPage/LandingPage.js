import React from "react";
import { Link } from "react-router-dom";
import background from "../../assests/undraw_A_day_at_the_park_re_9kxj.svg";
import "./landingPageStyle.js";
import { LandingStyles } from "./landingPageStyle.js";

const LandingPage = () => {
  return (
    <LandingStyles>
      <div className="landing-heading">
        <h1>Is it safe to breathe the air outside?</h1>
        <p className="landing-desc">
          Esse aliquip voluptate velit nulla excepteur. Quis magna incididunt
          pariatur fugiat adipisicing eiusmod mollit consectetur. Nulla labore
          excepteur dolor veniam Lorem fugiat mollit Lorem irure magna
          reprehenderit elit.
        </p>
        <Link to="/airData">
          <button className="landing-btn">Check Air Quality</button>
        </Link>
      </div>
      <div className="landing-img">
        <img src={background} alt="landing" />
      </div>
    </LandingStyles>
  );
};

export default LandingPage;
