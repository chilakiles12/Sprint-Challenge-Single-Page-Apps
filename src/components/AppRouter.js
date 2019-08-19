import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList';

export default function AppRouter() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </div>
  );
}
