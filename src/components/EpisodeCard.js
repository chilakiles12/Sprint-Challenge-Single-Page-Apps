import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content header={props.episode.name} />
      <Card.Content description={props.episode.episode} />
      <Card.Content extra>
        <Icon name="child" />
        Characters: {props.episode.characters.length}
      </Card.Content>
    </Card>
  );
}
