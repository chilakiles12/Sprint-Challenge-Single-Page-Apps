import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content header={props.episode.name} />
      <Card.Content description={props.episode.type} />
      <Card.Content description={props.episode.residents} />
      <Card.Content extra>
        <Icon name="child" />
        {props.episode.characters.dimension},
      </Card.Content>
    </Card>
  );
}
