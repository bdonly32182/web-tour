import React, { Component } from 'react'
import {connect} from 'react-redux'
import {userRegister} from '../../action'
import HeaderHome from './contenthome/HeaderHome'
import RegisterForm from './Form/RegisterForm'
import FooterHome from './contenthome/FooterHome'
 class Register extends Component {

    render() {
        const {formValue,users,userRegister} = this.props
        console.log(formValue);
        console.log(users);
        
        return (
            <div>
                <HeaderHome />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            
                                
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                          <div className="col-md-4">
                              {users.notMatch &&
                              <div className="alert alert-danger">
                                  Password is Match
                              </div> 
                              }
                              {users.isRegist &&
                                <div className="alert alert-danger">
                                    Please check Your Email or Your Lisence
                                </div>

                              }
                             <p className="text-center">
                                 <RegisterForm onSubmitRegister = {()=>userRegister(formValue) } />
                            </p>
                          </div>
                    </div>
                    
                </div>
               
                
            </div>
        )
    }
}

function mapStateToprops({form,users}){
    console.log('form',form);
    
    return {formValue:form.registerForm ? form.registerForm.values:null,users:users}
}

export default connect(mapStateToprops,{userRegister})(Register)