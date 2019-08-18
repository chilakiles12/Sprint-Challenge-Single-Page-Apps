import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = props => (
  <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        <span className="date">Status: {props.character.status}</span>
      </Card.Meta>
      <Card.Description>
        Location: {props.character.location.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>{props.character.name}</Card.Content>
  </Card>
);

export default CharacterCard;
