import * as React from 'react';
import CreateNewItem from '../../Common/Components/CreateNewItem'
import { createItem } from '../Duck/Operations';
import { connect } from 'react-redux';

interface IProps{
    createNewItem(item: string): void;
}

class CreateNewItemContainer extends React.Component<IProps> {
  
  public render() {
    return (
          <CreateNewItem defaultValue= {'Add an item'} />
    );
  }
}

export const mapDispatchToProps = (dispatch: any) => ({
    createItem: (item: string): void => dispatch(createItem(item))
})

export default connect(null, mapDispatchToProps)(CreateNewItemContainer);
