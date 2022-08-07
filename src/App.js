import React, { useEffect } from "react";
import Body from "./Body";
import "./index.css";
import Subscribe from "./Subscribe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
const accessKey = process.env.REACT_APP_ACCESS_KEY;

const mainUrl = "https://api.unsplash.com/photos";
const searchUrl = "https://api.unsplash.com/search/photos";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Body />}></Route>
        <Route exact path="/subscribe" element={<Subscribe />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
