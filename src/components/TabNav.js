import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import LocationList from './LocationsList';

// TODO: Add missing tabs below

const panes = [
  {
    menuItem: 'Homepage',
    render: () => (
      <Tab.Pane>
        <h2>Home Page</h2>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Characters',
    render: () => (
      <Tab.Pane>
        <CharacterList />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Location',
    render: () => (
      <Tab.Pane>
        <LocationList />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Episodes',
    render: () => (
      <Tab.Pane>
        <EpisodeList />
      </Tab.Pane>
    )
  }
];

const TabNav = () => <Tab panes={panes} />;

export default TabNav;
