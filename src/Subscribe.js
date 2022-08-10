import React from "react";
import Footer from "./Footer";
import { useState } from "react";

const Subscribe = () => {
  const [deleteSucess, setDeleteSuccess] = useState(false);
  //handle submit for email
  const handleSubmit = (e) => {
    e.preventDefault();
    const client = { userEmail };

    //run this POST request with whatever the value you is in 'client'

    fetch("http://localhost:4000/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(client),
    })
      .then(() => {
        setDeleteSuccess(true);
      })
      .then(() => {
        setUserEmail("");
      })
      .catch((error) => {
        console.log(
          `${error} to start up server input command 'npm run server into terminals'`
        );
        alert(`${error} - please run server to make requests`);
      });
    setDeleteSuccess(false);
  };

  function UserAddedMessage() {
    if (deleteSucess === true) {
      return (
        <h2 className="delete-sucess-message">
          User has been added to our database
        </h2>
      );
    }
  }

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
          <UserAddedMessage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscribe;
