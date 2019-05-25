import * as React from 'react';
import  ListItem  from '../../../src/Item/Components/ListItem';

class ListItemContainer extends React.Component {
    // this component will not get its value from this.props.children
    // it will have to use mapdispatchtoprops and get it from redux somewhere
    // for now it is children for simple demonstration of a component

    public render() {
        return (
            <ListItem
                value={this.props.children as string}
            />
    );
  }
}

export default ListItemContainer;
