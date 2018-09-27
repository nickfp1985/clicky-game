import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  

  render() {
    return (
      <Hero backgroundImage="./images/rockos-modern-life.jpeg">
        <h1>Rocko's Clicky Game</h1>
        {this.state.characters.map(character => (
          <ImageCard
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Hero>
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
          <Col size="md-12">
            <h3>image cards go here!</h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    );
  }
}

export default App;
