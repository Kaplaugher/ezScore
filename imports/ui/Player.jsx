import React from 'react';
import { Players } from './../api/players'

export default class Player extends React.Component {
  render() {
    return (
      <div>
        <div key={this.props.player._id} className="item">
          <p>{this.props.player.name} has {this.props.player.score} points.</p>
          <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc: {score: 1}})}>
            +1
          </button>
          <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc: {score: -1}})}>
            -1
          </button>
          <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
        </div>
      </div>
    );
  }
}

