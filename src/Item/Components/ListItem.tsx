import Checkbox from '@material-ui/core/Checkbox';
import * as React from 'react';

interface IProps{
    value: string;
}

interface IState{
    isChecked: boolean; // this, when true, will add css to the label to make it crossed off
}

class ListItem extends React.Component<IProps, IState> {
    state={
        isChecked : false,
    }

    onChange = (event: any, checked: boolean ) => {
        this.setState({
            isChecked: event.target.checked,
        })
    }

    render() {
        const text = this.state.isChecked ? <div className="strikedText">{this.props.value}</div> : this.props.value;
        return (
            <React.Fragment>
                
            <Checkbox onChange={this.onChange}/> {text}
              
            </React.Fragment>
    );
  }
}

export default ListItem;
