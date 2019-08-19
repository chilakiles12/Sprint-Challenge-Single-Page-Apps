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
    menuItem: 'Homepage',
    render: () => (
      <NavLink>
        <Icon name="home" />
        <Tab.Pane>
          <Home />
        </Tab.Pane>
      </NavLink>
    )
  },
  {
    menuItem: 'Characters',
    render: () => (
      <NavLink>
        <Icon name="group" />
        <Tab.Pane>
          <CharacterList />
        </Tab.Pane>
      </NavLink>
    )
  },
  {
    menuItem: 'Location',
    render: () => (
      <NavLink>
        <Icon name="location arrow" />
        <Tab.Pane>
          <LocationList />
        </Tab.Pane>
      </NavLink>
    )
  },
  {
    menuItem: 'Episodes',
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
