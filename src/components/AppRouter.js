import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home.js';
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList';

export default function AppRouter() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/character">Character</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/episode">Episode</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </div>
  );
}
