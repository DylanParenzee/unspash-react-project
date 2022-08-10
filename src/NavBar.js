import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <h1 className="logo"> - Dylan's API Project -</h1>
      <ul className="navigation-items">
        <li>
          <Link
            style={{ textDecoration: "none", color: "rgb(70, 93, 117)" }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "rgb(70, 93, 117)" }}
            to="./subscribe"
          >
            Subscribe
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "rgb(70, 93, 117)" }}
            to="./unsubscribe"
          >
            Unsubscribe
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
