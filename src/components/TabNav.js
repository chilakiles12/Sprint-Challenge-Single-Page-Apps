import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import Home from './Home';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import LocationList from './LocationsList';

// TODO: Add missing tabs below

const panes = [
  {
    menuItem: { key: 'home', icon: 'home', content: 'Home' },
    render: () => (
      <NavLink>
        <NavLink>
          <Tab.Pane>
            <Home />
          </Tab.Pane>
        </NavLink>
      </NavLink>
    )
  },
  {
    menuItem: { key: 'characters', icon: 'group', content: 'Characters' },
    render: () => (
      <NavLink>
        <Tab.Pane>
          <CharacterList />
        </Tab.Pane>
      </NavLink>
    )
  },
  {
    menuItem: { key: 'location', icon: 'location arrow', content: 'Location' },
    render: () => (
      <NavLink>
        <Tab.Pane>
          <LocationList />
        </Tab.Pane>
      </NavLink>
    )
  },
  {
    menuItem: { key: 'episodes', icon: 'tv', content: 'EpisodesList' },
    render: () => (
      <NavLink>
        <Icon name="tv" />
        <Tab.Pane>
          <EpisodeList />
        </Tab.Pane>
      </NavLink>
    )
  }
];

const TabNav = () => <Tab panes={panes} />;

export default TabNav;
