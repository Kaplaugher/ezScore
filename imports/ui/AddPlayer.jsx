import React from 'react';
import { Players } from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(event) {
    const playerName = event.target.playerName.value;
    event.preventDefault();

    if (playerName) {
      event.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

