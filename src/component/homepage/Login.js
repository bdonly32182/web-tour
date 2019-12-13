import React, { Component } from 'react'
import HeaderHome from './contenthome/HeaderHome'
import FooterHome from './contenthome/FooterHome'
import LoginForm from './Form/LoginForm'

class Login extends Component {

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
