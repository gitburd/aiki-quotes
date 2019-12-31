import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Material from './components/Material'
import OSenseiBio from './components/OSenseiBio'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path="/" render = { props =>(
            <React.Fragment>
              <Material/> 
              <OSenseiBio/>
            </React.Fragment>)} />
  
        </div>
        </Router>
    );
  }
}

export default App;
