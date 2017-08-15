import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} points</p>;
  });
};

const handleSubmit = function(event) {
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

Meteor.startup(function() {
  Tracker.autorun(function() {
    const players = Players.find().fetch();
    const title = 'ezScore';
    const name = 'Kyle';
    const jsx = (
      <div>
        <h1>{title}</h1>
        <p>hello, {name} </p>
        <p>This is my second p</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));
  });
});