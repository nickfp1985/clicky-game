import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    clickedImgs: [],
    correctClicks: 0,
    score: 0,
    topScore: 0
  };

  handle

  shuffleArray = () => {
    let j, x, i, characters = this.state.characters;
    console.log('foo');
    
    for (i = characters.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = characters[i];
      characters[i] = characters[j];
      characters[j] = x;
    }
    this.setState({ characters });
  };

  handleImageClick = () => {
    this.shuffleArray();
    // this.handleClickCount();
    let clicked = this.state.correctClicks
  };
  
// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Hero backgroundImage="./images/rockos-modern-life.jpeg">
          <h1>Rocko's Clicky Game</h1>
          <h2>Click on any image to earn points, but if you click an image twice it's game over!</h2>
        </Hero>
        <div className='img-wrapper'>
        {this.state.characters.map(character => (
          <ImageCard
            key={character.id}
            id={character.id}
            handleImageClick={this.handleImageClick}
            image={character.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
