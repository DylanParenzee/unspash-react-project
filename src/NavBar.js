import React from "react";

const NavBar = () => {
  return (
    <div className="nav-container">
      <h1 id="logo">Dylan's Image Gallery</h1>
      <ul className="navigation-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <input id="nav-search-bar" type="text" />
        </li>
        <li>
          <button id="nav-search-btn">Search</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
