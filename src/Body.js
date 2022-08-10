import React, { useEffect } from "react";
import "./index.css";
import NavBar from "./NavBar";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
const accessKey = process.env.REACT_APP_ACCESS_KEY;

const mainUrl = "https://api.unsplash.com/photos";
const searchUrl = "https://api.unsplash.com/search/photos";

//Main Home Component
const Home = () => {
  //state variables
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  //Fetch function for fetching from API
  const fetchImages = () => {
    let url;
    const pageURL = `&page=${page}`;

    //setting the URL to fetch from -- doing it like this so I can use The search bar later since its a different URL
    url = `${mainUrl}${accessKey}${pageURL}`;
    fetch(url)
      .then((res) => {
        //Throw error if the status of the API call is not 200
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        //Return the JSON object
        return res.json();
      })

      //Use the data from the returned JSON to set our images state variable
      .then((data) => {
        //Had to do this because on scroll event it jsut tries to load the same data again
        setImages((Images) => {
          //return the old images that were already on the page, with the new ones after the scroll event
          return [...Images, ...data];
        });
      })

      //this willl be the error logged if status is not 200 on API call
      .catch((error) => {
        console.log(`${error} - unable to load data`);
      });
  };

  //Had to add this useEffect to run the Fetch function when the page number state variable changes changes
  useEffect(() => {
    fetchImages();
  }, [page]);

  // if window inner height and scrollY are >= body scroll height update page varible by one
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
  }, []);

  // This is the click event for the submit button in the search bar
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <>
      <section className="title">
        <h2 className="title-words"> - Scroll Today's Top Posts - </h2>
      </section>
      {/* <section className="search">
        <form action="" className="search-form">
          <input
            type="text"
            placeholder="Search Photos"
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </section> */}
      <section className="photos">
        <div className="photos-contain">
          {images.map((image) => {
            return <ImageContainer key={image.id} {...image} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
