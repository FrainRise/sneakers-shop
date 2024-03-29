import React from 'react';
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
