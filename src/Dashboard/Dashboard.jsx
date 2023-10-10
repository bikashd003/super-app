import React from "react";
import "./Dashboard.css";
import UserDetails from "./UserDetails";
import News from "./News";
import Weather from "./Weather";
import Note from './Note/Note'
import Timer from "./StopWatch/Timer";

const Dashboard = () => {
  return (
    <>
      <div id="dashboard-container">
      
        <UserDetails />
      <Note />
        <News/>
      {/* <Weather/> */}
      <Timer />
      {/* <button>Browse</button> */}
      </div>
    </>
  );
};

export default Dashboard;
