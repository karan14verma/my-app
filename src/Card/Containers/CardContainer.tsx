import * as React from 'react';
import { connect } from 'react-redux';
import CardComponent from '../Components/CardComponent';

interface IProps{
  listItems: string[];
}

class CardContainer extends React.Component<IProps> {
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
export const mapDispatchToProps = (dispatch: any) => ({

});

export const mapStateToProps = (state: any) => {
  return {
    listItems: state.items,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);