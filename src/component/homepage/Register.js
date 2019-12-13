import React, { Component } from 'react'
import HeaderHome from './contenthome/HeaderHome'
import RegisterForm from './Form/RegisterForm'
import FooterHome from './contenthome/FooterHome'
 class Register extends Component {

    render() {
        return (
            <div>
                <HeaderHome />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            
                                
                        </div>
                        <div className="col-md-4">
                             <p>
                                 <RegisterForm />
                            </p>
                        </div>
                    </div>
                    
                </div>
               
                <FooterHome />
                
            </div>
        )
    }
}
export default Register