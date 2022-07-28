import React from "react";
import "./index.css";
import NavBar from "./NavBar";

const App = () => {
  const accessKey = "Gl9gxcrGbgAsfxKYvsEZAd7DVGWj2C9GLrPc89oJdew";
  const fetchImages = () => {
    fetch("https://api.unsplash.com/photos/?client_id=" + accessKey)
      .then((res) => res.JSON())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

export default App;
