import Card  from '@material-ui/core/Card';
import * as React from 'react';
import ListItemContainer from 'src/Item/Containers/ListItemContainer';

class CardComponent extends React.Component {
  public render() {
    return (
      <Card
        raised={true}
        className={'card'}
      >
          <ListItemContainer>
           {'card element'}
          </ListItemContainer>
                    
       
      </Card>
    );
  }
}

export default CardComponent;
