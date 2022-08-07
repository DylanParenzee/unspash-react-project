import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h1 className="subscribe-title"> Let's Stay in Touch </h1>
      <h2>Access to 5000+ artist's and their work</h2>

      <form className="subscribe-form" action="">
        <input
          className="email-input"
          type="text"
          placeholder="Enter Your Email Address"
        />
        <button className="subscribe-button">Subscribe</button>
      </form>

      <div className="signup-info">
        <h4>We'll email you more info, opt out any time. promise.</h4>
      </div>
    </div>
  );
};

export default Subscribe;
