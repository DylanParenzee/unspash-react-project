import React, { useEffect } from "react";
import Body from "./Body";
import "./index.css";
import Subscribe from "./Subscribe";

import NavBar from "./NavBar";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
const accessKey = process.env.REACT_APP_ACCESS_KEY;

const mainUrl = "https://api.unsplash.com/photos";
const searchUrl = "https://api.unsplash.com/search/photos";

const App = () => {
  return (
    <>
      <NavBar />

      <Body />
    </>
  );
};

export default App;
