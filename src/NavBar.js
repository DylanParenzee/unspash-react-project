import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSubmit = () => {
    console.log("hello");
  };
  return (
    <div className="nav-container">
      <h1 className="logo"> - Dylan's API Project -</h1>
      <ul className="navigation-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./subscribe">Subscribe</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
