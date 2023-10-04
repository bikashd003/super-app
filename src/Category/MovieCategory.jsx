import React from 'react'
import './Category.css'

const MovieCategory = (props) => {
  return (
    <>
       <div className={`movie-container ${props.selected ? "selected" : ""}`}  style={{backgroundColor:props.backGroundColor,}} onClick={props.onClick}>
        <h3>{props.type}</h3>
        <img src={props.image} alt={props.type} />
       </div>
    </>
  )
}

export default MovieCategory