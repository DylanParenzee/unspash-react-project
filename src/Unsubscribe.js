import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const Unsubscribe = () => {
  const [userDelete, setUserDelete] = useState([]);

  const handleDelete = (e) => {
    let users;
    e.preventDefault();
    fetch(`http://localhost:4000/clients/1`, {
      method: "DELETE",
    });
  };

  return (
    <div className="subscribe-page">
      <div className="subscribe-container">
        <h1 className="subscribe-title"> We're Sorry to see you Go </h1>
        <h2>Re-subscribe at any time</h2>

        <form className="subscribe-form">
          <input
            className="email-input"
            type="text"
            placeholder="Enter Your Email Address"
            value={userDelete}
            onChange={(e) => setUserDelete(e.target.value)}
          />
          <button onClick={handleDelete} className="subscribe-button">
            Unsubscribe
          </button>
        </form>

        <div className="signup-info">
          <h4>Enter your email address and click unsubscribe</h4>
        </div>
      </div>
    </div>
  );
};

export default Unsubscribe;
