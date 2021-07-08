import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content header={props.location.name} />
      <Card.Content description={props.location.type} />
      {/* <Card.Content description={props.location.residents} /> */}
      <Card.Content extra>{props.dimension},</Card.Content>
    </Card>
  );
}
