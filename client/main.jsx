import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player={player}/>
  });
};


Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = 'ezScore';
    const jsx = (
      <div>
        <TitleBar title={title}/>
        <PlayerList players={players}/>
        <AddPlayer />
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));
  });
});