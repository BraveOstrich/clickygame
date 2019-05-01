import React from "react";
import "./style.css";
//var Shuffle = require("react-shuffle");



  function CharacterCard(props) {
    return (
          <div 
            className="card" 
            value={props.id} 
            onClick={() => props.handleClick(props.id)}
          >
            <span>
                <img className="image" alt={props.name} src={props.image}/>
            </span>
          </div>
    )
  }

export default CharacterCard;
