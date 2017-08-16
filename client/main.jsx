import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from '../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points.
        <button onClick={() => Players.update(player._id, {$inc: {score: 1}})}>
          +1
        </button>
        <button onClick={() => Players.update(player._id, {$inc: {score: -1}})}>
          -1
        </button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};

const handleSubmit = (event) => {
  const playerName = event.target.playerName.value;
  event.preventDefault();

  if (playerName) {
    event.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0,
    });
  }

};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = 'ezScore';
    const jsx = (
      <div>
        <TitleBar title={title}/>
        {renderPlayers(players)}
        <AddPlayer />
        <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" placeholder="Player Name"/>
        <button>Add Player</button>
        </form>
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));
  });
});