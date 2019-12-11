import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/homepage/Home'
import About from './component/homepage/About'
import Contact from './component/homepage/Contact'
import JoinUs from './component/homepage/JoinUs'
import Login from './component/homepage/Login'
import Register from './component/homepage/Register'
 class App extends Component {

  renderRoute(){
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path ="/contact" component={Contact} />
        <Route exact path="/join" component={JoinUs} />
        <Route exact path= "/login" component={Login} />
        <Route exact path="/register" component={Register} />
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