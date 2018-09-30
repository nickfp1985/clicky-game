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
    score: 0,
    topScore: 0,
    message: ""
  };

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

  handleImageClick = event => {
    this.shuffleArray();

    //GRAB WHATEVER IS EQUAL TO THE ATTRIBUTE 'NAME' OFF THE IMAGE CARD
    const name = event.target.attributes.getNamedItem("name").value;
    console.log(name)

    //CLONING THE STATE INTO newState OBJECT FOR EASY MANIPULATING:
    const newState = { ...this.state };

    //IF THE CURRENT STATES CLICKEDIMGS ARRAY CONTAINS THE NAME JUST CLICKED THEN RESET THE SCORE, RESET THE ARRAY:
    if (newState.clickedImgs.includes(name)) {
      newState.score = 0
      newState.clickedImgs = []
      //THEN WE SET THE STATE EQUAL TO THE NEWSTATE OBJECT WE'VE MADE CHANGES TO:
      this.setState(this.state = newState)
    } else { //ELSE THE IMG CLICKED IS NOT IN THE ARRAY OF CLICKED IMAGES (CORRECT GUESS)...
      newState.clickedImgs.push(name)
      newState.score++;
      this.setState(this.state = newState)
    }

    if (newState.score > newState.topScore) {
      newState.topScore++;
      this.setState(this.state = newState)
    }

    if (newState.correctGuessTally === 12) {
      newState.alertMessage = "WINNER!";
      newState.score = 0;
      newState.clickedImgs = [];
      this.setState(this.state = newState)
    }

  };

  updateTopScore = (newState, cb) => {
    if (newState.clickedChars.length > newState.topScore) {
      newState.topScore++
      this.setState(this.state = newState)
    }
    cb(newState)
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.clickedChars.includes(name)) {
      newState.alertMessage = `You already clicked "${name.toUpperCase()}"!`
      newState.clickedChars = []
      this.setState(this.state = newState)
    } else {
      newState.clickedChars.push(name)
      this.setState(this.state = newState)
    }
    cb(newState, this.alertWinner)
  }
  
// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Hero>
          <h1>Rocko's Clicky Game</h1>
          <h2>Click on any image to earn points, but if you click an image twice it's game over!</h2>
        </Hero>
        <div className='img-wrapper'>
          {this.state.characters.map(character => (
            <ImageCard
              key={character.id}
              id={character.id}
              name={character.name}
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
