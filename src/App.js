import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import './App.css';

class App extends React.Component {
  state = {
    count: 0
  };

  randomDeck = () => {
    const deck = [];
    for (let i = 1; i < 13; i++) {
      const card = i < 10 ? `0${i}` : `${i}`
      deck.push({id: `${i}`,image: `images/card_${card}.png`});
    }
    return deck.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  handleClick = (e) => {
    console.log(e.target);
  };

  render() {
  const cards = this.randomDeck();
  	return (
  		<div>
  			<Navbar/>
        <main className="container">
          {
            cards.map(card => <Card image={card.image} id={card.id} onclick={(e) => {this.handleClick(e)}} key={card.id} />)
          }
        </main>
  		</div>
  	);
  }
}

export default App;
