import React from "react";
import image14 from "../Images/image 14.png";
import SelectedCategory from "./SelectedCategory";

const UserDetails = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const categoryData = JSON.parse(localStorage.getItem("CategoryData"));
  return (
    <>
      <div className="user-details">
        <div className="avater">
          <img src={image14} alt="avater" />
        </div>
        <div className="details">
          {userDetails.map((current, index) => {
            return (
              <div key={index}>
                <h3>{current.name}</h3>
                <h4>{current.email}</h4>
                <h1>{current.username}</h1>
              </div>
            );
          })}

          <div className="select-category">
            {categoryData[0].map((currElm, index) => {
              return <SelectedCategory category={currElm} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
