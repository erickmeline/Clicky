import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import './App.css';

class App extends React.Component {
  state = {
    score: 0,
    topscore: 0,
    clicked: [],
    headline: 'Click an image to begin!',
    gameOver: false
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
    let { clicked, score, topscore, gameOver } = this.state;
    if (!gameOver) {
      const id = e.target.getAttribute('data-id');
      if (!clicked.includes(id)) {
        clicked.push(id);
        score++;
        topscore = score > topscore ? score : topscore;
        this.setState({clicked, score, topscore, headline: 'Nice! Now select another unique.'});
      }
      else {
        topscore = score > topscore ? score : topscore;
        this.setState({clicked, score, topscore, headline: 'You selected that one before.', gameOver: true});
      }
    }
  };

  newGame = () => {
    this.setState({
      score: 0,
      clicked: [],
      headline: 'Click an image to begin!',
      gameOver: false
    });
  }

  render() {
  const cards = this.randomDeck();
  const { headline, score, topscore, gameOver } = this.state;
  const classes = gameOver ? 'gameOver show' : 'gameOver hide';
  	return (
  		<div>
  			<Navbar score={score} topscore={topscore} headline={headline} gameOver={gameOver} />
        <main className="container">
          {
            cards.map(card => <Card image={card.image} id={card.id} onclick={(e) => {this.handleClick(e)}} key={card.id} />)
          }
          <div className={classes}>
            <h1>Game Over</h1>
            <button onClick={() => {this.newGame()}}>Play Again?</button>
          </div>
        </main>
  		</div>
  	);
  }
}

export default App;
