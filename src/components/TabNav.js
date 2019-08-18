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
      <div>
        <Icon name="home" />
        <Tab.Pane>
          <h2>Home Page</h2>
        </Tab.Pane>
      </div>
    )
  },
  {
    menuItem: 'Characters',
    render: () => (
      <div>
        <Icon name="group" />
        <Tab.Pane>
          <CharacterList />
        </Tab.Pane>
      </div>
    )
  },
  {
    menuItem: 'Location',
    render: () => (
      <div>
        <Icon name="location arrow" />
        <Tab.Pane>
          <LocationList />
        </Tab.Pane>
      </div>
    )
  },
  {
    menuItem: 'Episodes',
    render: () => (
      <div>
        <div>
          <Icon name="tv" />
          <Tab.Pane>
            <EpisodeList />
          </Tab.Pane>
        </div>
      </div>
    )
  }
];

const TabNav = () => <Tab panes={panes} />;

export default TabNav;
