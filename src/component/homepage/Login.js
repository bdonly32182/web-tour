import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import HeaderHome from './contenthome/HeaderHome'
import FooterHome from './contenthome/FooterHome'
import LoginForm from './Form/LoginForm'

class Login extends Component {

    renderLogin(){
        const Productfield =[
            {label:"Product Name",type:"text",name:"productName",required:true},
            {label:"Unit",type:"number",name:"unit",required:true},
            {label:"Thumbnail",type:"text",name:"thumbnail",required:true},
        ]
        
       return Productfield.map(({type,name})=>{
        return(
            <Field type={type}  name={name} component="input"/>
        )
       })
    }
    render() {
        return (
            <div>
                
               {/* <HeaderHome /> */}
                    <div className="container-fluid">
                        <div className="row">
                          
                                <HeaderHome /> 
                            
                           
                        </div>
                        <hr></hr>
                        <br />
                        <br />
                        <br />
                        <br/>
                        <div className="row ">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <p className="text title">
                                     <LoginForm />
                                </p>
                           
                            </div>
                           
                        </div>
                        <br/>
                         <div className="row">
                             <div className="col">
                                <FooterHome />
                             </div>
                           
                         </div>
                   
                    </div>
                        
                    
               
                {/* <FooterHome /> */}

                
            </div>
        )
    }
}

export default Login;
