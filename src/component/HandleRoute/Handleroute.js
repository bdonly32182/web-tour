import React ,{Component} from 'react'
import store from '../../reducers'
import {loadUser} from '../../action/UserAction'
const HandleAuthRoute = (ComposedComponent )=>{
    const Token = localStorage.getItem('token')
    console.log(Token);
    
    class Authenication extends Component{
       
        componentWillMount(){
            
            
            console.log('token auth',Token);
            if(!Token){
                this.props.history.push('/login') 
            }
                
         }
        componentWillUpdate(nextProps) {
            !Token&&  this.props.history.push('/login')
            }
    
        render(){
            console.log(this.props);
            
            return <ComposedComponent {...this.props} />
        }
    }
}

export default HandleAuthRoute