import Card  from '@material-ui/core/Card';
import * as React from 'react';
import CreateNewItem from 'src/Common/Components/CreateNewItem';
import ListItemContainer from 'src/Item/Containers/ListItemContainer';

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
          <CreateNewItem defaultValue= {'Add an item'} />
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
