import Input from '@material-ui/core/Input';

import * as React from 'react';

interface IProps{
    defaultValue: string;
    state: {value: string; onValueChange(value: string): void;};
    handleOnCreate(item: string): void;
}


class CreateNewItem extends React.Component<IProps> {

    isOkToProceed = () : boolean => {
        return this.props.state.value.trim() !== '';
    }

    handleKeyPress = (event: any) => {
		if (event.charCode === 13 && this.isOkToProceed()) {  // 'Enter' pressed
			this.props.handleOnCreate(event);
		}
    }

    handleChange = (event: any): void => {
		// this.validateValue(event.target.value);
		// const name = this.props.generateNameFromInput(event.target.value);
		this.props.state.onValueChange(event.target.value);
		// this.props.state.onNameChange(name);
	}

    public render() {
        return (
            <div className={'container'}>
                 <Input
                    placeholder= {this.props.defaultValue}
                    className={'input'}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange = {this.handleChange}
                    onKeyPress = {this.handleKeyPress}
                    value = {this.props.state.value}
                />
      </div>
    );
  }
}

export default CreateNewItem;
