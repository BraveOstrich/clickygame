import React from "react";
import "./style.css";

function Title(props) {
  return <div className="brand">
            <h1 className="display-4 title">{props.children}</h1>
            <p className="lead">Click on an Image to Score Points</p>
          </div>
}

export default Title;
