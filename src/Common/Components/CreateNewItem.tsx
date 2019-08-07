import Input from '@material-ui/core/Input';

import * as React from 'react';

interface IProps{
    defaultValue: string;
}

class CreateNewItem extends React.Component<IProps> {

    public render() {
        return (
            <div className={'container'}>
                 <Input
                    defaultValue= {this.props.defaultValue}
                    className={'input'}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
      />
      </div>
    );
  }
}

export default CreateNewItem;
