import * as React from 'react';
import CardComponent from '../Components/CardComponent';

class CardContainer extends React.Component {
  // all the redux logic stays in the containers
  // list items should come from redux
    public render() {
      return (
        <CardComponent
          listItems= {["el1", "el2", "el3"]}
        />
      );
    }
}

export default CardContainer;