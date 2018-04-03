import React, { Component } from 'react';
import './App.css';
/*import Champion from './Champion';*/
import champions from './champions.json';
import ChampionList from './ChampionList';

class App extends Component {
	constructor(champions){
		super(champions);
		this.state = {
			champions: champions,
		}
	}

	/*componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response => response.json())
      .then(result => result = result.results)
      .then(champions => this.setState({ champions: champions }))
    }*/

  	render() {
	    return (
	      <div className="App">
	        <header className="App-header">
	          <h1 className="App-title">My first LOL App</h1>
	          <ChampionList />
	        </header>
	      </div>
	    );
  	}
}

export default App;
