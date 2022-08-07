import React from "react";
import Footer from "./Footer";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <div className="subscribe-page">
      <div className="subscribe-container">
        <h1 className="subscribe-title"> Let's Stay in Touch </h1>
        <h2>Access to 5000+ artist's and their work</h2>

        <form className="subscribe-form" action="">
          <input
            className="email-input"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <button onClick={handleSubmit} className="subscribe-button">
            Subscribe
          </button>
        </form>

        <div className="signup-info">
          <h4>We'll email you more info, opt out any time. promise.</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscribe;
