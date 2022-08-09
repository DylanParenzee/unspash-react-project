import React from "react";
import Footer from "./Footer";
import { useState } from "react";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const client = { userEmail };

    fetch("http://localhost:4000/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(client),
    })
      .then(() => {
        alert("Your email has been added, Thanks :)");
      })
      .catch((error) => {
        console.log(error + "Failed to add Email");
      });
  };

  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="subscribe-page">
      <div className="subscribe-container">
        <h1 className="subscribe-title"> Let's Stay in Touch </h1>
        <h2>Access to 5000+ artist's and their work</h2>

        <form className="subscribe-form">
          <input
            className="email-input"
            type="text"
            placeholder="Enter Your Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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
