import React, { useState } from "react";
import "./Category.css";
import MovieCategory from "./MovieCategory";
import Categorylist from "./Categorylist";
import Genre from "./Genre";
import warning from "../Images/Vector.svg";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleMovieClick = (type) => {
    if (!selectedTypes.includes(type)) {
      setSelectedTypes([...selectedTypes, type]);
      
    }
  };
 
  const removeItem = (idex) => {
    const updatedSelectedTypes = selectedTypes.filter(
      (type, idx) => idx !== idex
    );
    setSelectedTypes(updatedSelectedTypes);
  };
  const handleNextPage = () => {
    if (selectedTypes.length <= 2) {
      setError(true);
    } else {
      CategoryData(selectedTypes);
      navigate("/dashboard");
    }
  };
  const CategoryData = (selectedCategory) => {
    const prevData = JSON.parse(localStorage.getItem("CategoryData")) || [];
    prevData.push(selectedCategory);
    localStorage.setItem("CategoryData", JSON.stringify(prevData));
  };

  return (
    <>
      <div id="category-container">
        <div className="left-category">
          <div className="left-container">
            <h2>Super app</h2>
            <h1>Choose your entertainment category</h1>
          </div>
          <div className="selected-category">
            {selectedTypes.map((type, idex) => (
              <Genre key={type} type={type} onClick={() => removeItem(idex)} />
            ))}
            {error && selectedTypes.length <= 2 ? (
              <p className="warning">
                <img src={warning} alt="" />
                Minimum 3 category required
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="right-category">
          <div className="category-list">
            {Categorylist.map((list) => {
              return (
                <MovieCategory
                  key={list.id}
                  type={list.type}
                  image={list.image}
                  backGroundColor={list.backGroundColor}
                  onClick={() => handleMovieClick(list.type)}
                  selected={selectedTypes.includes(list.type)}
                />
              );
            })}
            <button className="next" onClick={handleNextPage}>
              next page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
