import * as React from 'react';
import './css/App.css';

import CardContainer from './Card/Containers/CardContainer';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <CardContainer/>
      </div>
    );
  }
}

export default App;
