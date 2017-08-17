import React from 'react';
import  Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return <h3>Add a player to get started!</h3>;
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>
      });
    }
  }
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
};
