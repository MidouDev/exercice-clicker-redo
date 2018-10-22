import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'


library.add(faGhost)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row m-auto">
              <i className="fa fa-hand-pointer-o fa-4x text-white"></i>
              <div className="h1 ml-2 my-auto text-light">React Clicker</div>
            </div>
          </div>
        </header>

        <div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
