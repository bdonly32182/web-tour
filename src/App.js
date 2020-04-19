import React, { Component } from 'react'
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom'


import Login from './component/homepage/Login'
import Register from './component/homepage/Register'
import IntregateLTE from './component/adminLTE/IntregateLTE'
import ListPartner from './component/adminLTE/admin/ListPartner'
import ListTour from './component/adminLTE/partner/ListTour'
import EditTour from './component/adminLTE/partner/EditTour'
import ListGuide from './component/adminLTE/partner/Guide/ListGuide'
import EditGuide from './component/adminLTE/partner/Guide/EditGuide'
import ListOrder from './component/adminLTE/partner/Order/ListOrder'
import OrderCheck from './component/adminLTE/partner/Order/OrderCheck'
 class App extends Component {
constructor(props){
  super(props)
  this.state={check:true}
}

  renderRoute(){
    return(
      <div>
      
         <Switch>
          
        <Route exact path='/' component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/manage" component={IntregateLTE} />
        <Route exact path="/manage/approve" component={ListPartner} />
        <Route exact path="/manage/tour" component={ListTour}/>
        <Route exact path="/manage/tour/add" component={EditTour} />
        <Route exact path="/manage/tour/edit/:id" component={EditTour} />
        <Route exact path="/manage/tour/check/:id" component={EditTour} />
        <Route exact path="/manage/guide" component={ListGuide}/>
        <Route exact path="/manage/guide/add" component={EditGuide}/>
        <Route exact path="/manage/guide/edit/:id" component ={EditGuide}/>
        <Route exact path="/manage/order" component={ListOrder} />
        <Route exact path="/manage/order/:id" component={OrderCheck} />
        <Route path="*" component={()=>"404 NOT FOUND"} />
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