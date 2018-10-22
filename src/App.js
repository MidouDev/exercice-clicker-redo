import React, { Component } from 'react';
import Header from './Header'
import Clicker from './Clicker'
import './App.css';
import './bootstrap.min.css';

class App extends Component {

  state = {
    counter : 0,
  }

  onPlusClick = () => {
    this.setState({counter : this.state.counter + 1})
  }

  onRefreshClick = () => {
    this.setState({counter : 0})
  }

  onMinusClick = () => {
    this.setState({counter : this.state.counter - 1})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Clicker 
          counter = {this.state.counter}
          onPlusClick={this.onPlusClick}
          onRefreshClick={this.onRefreshClick}
          onMinusClick={this.onMinusClick}
        />
      </div>
    );
  }
}

export default App;
