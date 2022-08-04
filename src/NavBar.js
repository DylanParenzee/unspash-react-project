import React from "react";

const NavBar = () => {
  const handleSubmit = () => {
    console.log("hello");
  };
  return (
    <div className="nav-container">
      <ul className="navigation-items">
        <li>Home</li>
        <li>About</li>
        <li>Subscribe</li>
      </ul>
    </div>
  );
};

export default NavBar;
