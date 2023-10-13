import React from "react";
import "./MovieRecomendation.css";
import avater from "../Images/avater.png";
import MovieListing from "./MovieListing";
import { useNavigate } from "react-router-dom";

const MovieRecomendation = () => {
  const selectedCategory = JSON.parse(localStorage.getItem("CategoryData"));
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const avaterimg = {
    backgroundImage: `url(${avater})`
  };
  return (
    <div id="movie-container">
      <div className="navbar">
        <h1>Super app</h1>
        <div
          className="profile"
          style={avaterimg}
          onClick={handleDashboard}
        ></div>
      </div>
      <div className="movie-recomendation">
        <h1>Entertainment according to your choice</h1>
        <MovieListing categories={selectedCategory} />
      </div>
    </div>
  );
};

export default MovieRecomendation;
