import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/homepage/Home'
import About from './component/homepage/About'
import Contact from './component/homepage/Contact'
import JoinUs from './component/homepage/JoinUs'
import Login from './component/homepage/Login'
import Register from './component/homepage/Register'
import IntregateLTE from './component/adminLTE/IntregateLTE'
import ListPartner from './component/adminLTE/admin/ListPartner'
import ListTour from './component/adminLTE/partner/ListTour'
import EditTour from './component/adminLTE/partner/EditTour'
import ListGuide from './component/adminLTE/partner/Guide/ListGuide'
import EditGuide from './component/adminLTE/partner/Guide/EditGuide'
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
        <Route exact path="/manage/approve" component={ListPartner}/>
        <Route exact path="/manage/tour" component={ListTour}/>
        <Route exact path="/manage/tour/add" component={EditTour} />
        <Route exact path="/manage/tour/edit/:id" component={EditTour} />
        <Route exact path="/manage/guide" component={ListGuide}/>
        <Route exact path="/manage/guide/add" component={EditGuide}/>
        <Route exact path="/manage/guide/edit/:id" component ={EditGuide}/>
        
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