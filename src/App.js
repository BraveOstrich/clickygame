import React, { Component } from "react";
import FriendCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends
  };

  

  render() {
    return (
      <Wrapper>
        <div className="navbar">
        <Title>Clicky Game!</Title>
        </div>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
