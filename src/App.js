import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/Home'

 class App extends Component {

  renderRoute(){
    return(
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    )
  }
  render() {
    return (
      
        <BrowserRouter>{this.renderRoute()}</BrowserRouter>
      
    )
  }
}
export default App;