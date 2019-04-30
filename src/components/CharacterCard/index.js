import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          <img className="image" alt={props.name} src={props.image} />
        </span>
  );
}

export default FriendCard;
