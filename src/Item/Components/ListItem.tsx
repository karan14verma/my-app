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
        isChecked : true,
    }

    onChange = (event: any, checked: boolean ) => {
        this.setState({
            isChecked: event.target.checked,
        })
    }

    render() {
        let text;
        if(this.state.isChecked){
            text = <div className="strikedText">{this.props.value}</div>;
        }else{
            text = this.props.value
        }
        return (
            <React.Fragment
            >
              <Checkbox
                // checked={this.state.isChecked}
                onChange={this.onChange}
              />
              {text}
              
            </React.Fragment>
    );
  }
}

export default ListItem;
