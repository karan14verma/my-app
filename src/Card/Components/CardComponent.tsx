import Card  from '@material-ui/core/Card';
import * as React from 'react';
import ListItemContainer from 'src/Item/Containers/ListItemContainer';
import CreateNewItemContainer from '../Containers/CreateNewItemContainer';

interface IProps{
  listItems: string[];
}

class CardComponent extends React.Component<IProps> {
  
  public render() {
    return (
      <React.Fragment>
        <Card
        raised={true}
        className={'card'}
        >
          <CreateNewItemContainer />
          {this.props.listItems.map(item =>(
            <ListItemContainer>
              {item}
           </ListItemContainer>
          ))} 
       
      </Card>
      
      </React.Fragment>
      
    );
  }
}

export default CardComponent;
