import * as React from 'react';
import CreateNewItem from '../../Common/Components/CreateNewItem'
import { createItem } from '../Duck/Operations';
import { connect } from 'react-redux';

interface IProps{
    createNewItem(item: string): void;
}

interface IState{
  value: string;
}

export class CreateNewItemContainer extends React.Component<IProps, IState> {

  state = {
    value: ''
  }
  
  handleOnCreate = () => {
    // to do handle props call to update store
    console.log('handleOnCreate in CreateNewItemContainer');
    this.props.createNewItem(this.state.value);
    this.setState({ value: '' });
  }

  onValueChange = (value: string) => {
		this.setState({ value });
	}

  public render() {
    const newItemState = {
			value: this.state.value,
			onValueChange: this.onValueChange,
		};

    return (
          <CreateNewItem 
            defaultValue= {'Add an item'}
            handleOnCreate = {this.handleOnCreate}
            state = {newItemState}
          />
    );
  }
}

export const mapDispatchToProps = (dispatch: any) => ({
    createNewItem: (item: string): void => dispatch(createItem(item))
})

export default connect(null, mapDispatchToProps)(CreateNewItemContainer);
