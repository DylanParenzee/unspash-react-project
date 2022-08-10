import React, { useEffect } from "react";
import Body from "./Body";
import "./index.css";
import Subscribe from "./Subscribe";
import Unsubscribe from "./Unsubscribe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";

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
      <Route exact path="/">
        <Body />
      </Route>
      <Route exact path="/subscribe">
        <Subscribe />
      </Route>
      <Route exact path="/unsubscribe">
        <Unsubscribe />
      </Route>
      <Route exact path="/footer-info">
        <Footer />
      </Route>
    </Router>
  );
};

export default App;
