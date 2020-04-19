import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {loadUser,userLogout} from '../../action/UserAction'
import Header from './Header'
import Menubar from './Menubar'
import Footer from './Footer'
const Token = localStorage.getItem('token')
 class IntregateLTE extends Component {
     constructor(props){
         super(props)
         this.onLogout = this.onLogout.bind(this)
     }
    componentDidMount(){
        console.log('didmount');
        
        if(Token){
            
        this.props.dispatch(loadUser())
        }
        else if(!this.props.users ){
            this.props.history.push('/')
        }
        
    }
    
    
    onLogout =()=>{
        this.props.dispatch(userLogout)    
    }
   showadminLTE(users){
      
       
       if(users){
          if(users.role == "admin"){
              return (
                        <div className='container-fluid'>
                            <Header user ={users} onLogout ={this.onLogout}/>
                            <Menubar user={users}/>
                            {/* <div className="row">
                                <p><Link to="/manage/approve" className="text-danger">Approve</Link> </p>
                            </div> */}
                            
                            <Footer role="admin"/>
                        </div>
              )

          }else if(users.role == "partner"){
            return (
                <div className='container-fluid'>
                <Header user ={users} onLogout ={this.onLogout}/>
                <Menubar user={users}/>
                
                
                <Footer role="partner"/>
            </div>
            )
          }
          
       }
   }

    render() {
        
        return (
            
            <div>
                
              {this.showadminLTE(this.props.users)}
            </div>
        )
    }
}
function mapStateToProps(state){
   
    return {users:state.users.user}
}
export default withRouter(connect(mapStateToProps)(IntregateLTE))