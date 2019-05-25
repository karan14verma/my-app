import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import * as React from 'react';

interface IProps{
    value: string;
}

interface IState{
    isChecked: boolean; // this, when true, will add css to the label to make it crossed off
}

class ListItem extends React.Component<IProps, IState> {
    public render() {
        return (
            <React.Fragment
            >
                <FormControlLabel
                    control={
                        <Checkbox                        
                        />
                    }
                    label={this.props.value}
                />
            </React.Fragment>
    );
  }
}

export default ListItem;
