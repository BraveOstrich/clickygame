import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h1>Clicky Game!</h1>
            <p className="lead">Click an Image to Score Points.</p>
            <br />
            <p className="lead">Don't Click an Image You Have Already Selected.</p>
            <h3>Score: </h3>
        </nav>
    )
}


export default Navbar;