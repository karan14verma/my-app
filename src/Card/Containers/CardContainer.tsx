import * as React from 'react';
import { connect } from 'react-redux';
import CardComponent from '../Components/CardComponent';
import ItemCollection from '../../Common/Models/ItemCollection';

interface IProps {
  listItems: ItemCollection<string>;
}

export class CardContainer extends React.PureComponent<IProps> {
  // all the redux logic stays in the containers
  // list items should come from redux
  public render() {
    return (
      <CardComponent
        listItems={this.props.listItems}
      />
    );
  }
}
export const mapDispatchToProps = (dispatch: any) => ({

});

export const mapStateToProps = (state: any) => {
  return {
    listItems: state.items,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);