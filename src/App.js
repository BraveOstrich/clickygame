import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
import Navbar from "./components/Nav";
import friends from "./friends.json";


function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {

  state = {
    friends,
    score: 0,
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    console.log(this)
    this.setState({
      score: newScore
    });
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = randomFriends(friends);
    this.setState({ friends: shuffledFriends });
  };


  render(){
    return (
      <Wrapper className="wrapper">
        <Navbar />
        {this.state.friends.map(friend => (
          <CharacterCard
            id={friend.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
