import React from "react";
import "./Dashboard.css";
import UserDetails from "./UserDetails";
import News from "./News";
import Weather from "./Weather";
import Note from './Note/Note'
import Timer from "./StopWatch/Timer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

const handleBrowse=()=>{
  navigate("/movie")
}
  return (
    <>
      <div id="dashboard-container">
      
        <UserDetails />
      <Note />
        <News/>
      <Weather/>
      <Timer />
      <button className="browse" onClick={handleBrowse}>Browse</button>
      </div>
    </>
  );
};

export default Dashboard;
