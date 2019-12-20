import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/homepage/Home'
import About from './component/homepage/About'
import Contact from './component/homepage/Contact'
import JoinUs from './component/homepage/JoinUs'
import Login from './component/homepage/Login'
import Register from './component/homepage/Register'
import IntregateLTE from './component/adminLTE/IntregateLTE'
 class App extends Component {
constructor(props){
  super(props)
  this.state={check:true}
}
  renderRoute(){
    return(
      <div>
      
         <Switch>
        
        <Route exact path='/' component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path ="/contact" component={Contact} />
        <Route exact path="/join" component={JoinUs} />
        <Route exact path= "/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/manage" component={IntregateLTE} />
        
      </Switch>
        
      </div>
     
    )
  }
  render() {
    return (
        <div>
      
          <BrowserRouter>{this.renderRoute()}</BrowserRouter>
          
        </div>
        
      
    )
  }
}
export default App;