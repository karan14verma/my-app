import Card  from '@material-ui/core/Card';
import * as React from 'react';
import CreateNewItem from 'src/Common/Components/CreateNewItem';
import ListItemContainer from 'src/Item/Containers/ListItemContainer';

class CardComponent extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Card
        raised={true}
        className={'card'}
        >
          <CreateNewItem defaultValue= {'Add an item'} />
          <ListItemContainer>
           {'card element'}
          </ListItemContainer>
       
      </Card>
      
      </React.Fragment>
      
    );
  }
}

export default CardComponent;
