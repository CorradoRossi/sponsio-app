import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const CardsSidebar = () => {

  return (

    <div className="cardsSidebar">
      <Components.Card style={{ width: '18rem' }}>
        <Components.Card.Img variant="top" src="/packages/app/lib/static/sponsio-logo-prpl.png" />
        <Components.Card.Body>
          <Components.Card.Title>Sidebar Post</Components.Card.Title>
          <Components.Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Components.Card.Text>
          <Components.Button variant="primary">To The Post</Components.Button>
        </Components.Card.Body>
      </Components.Card>
    </div>
  )
}

export default CardsSidebar

registerComponent({ name: 'CardsSidebar', component: CardsSidebar });