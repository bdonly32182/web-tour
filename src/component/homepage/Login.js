import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import HeaderHome from './contenthome/HeaderHome'
import FooterHome from './contenthome/FooterHome'
import LoginForm from './Form/LoginForm'
import {userLogin} from '../../action'
import IntregateLTE from '../adminLTE/IntregateLTE'
class Login extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        const {formValue,userLogin,users} = this.props
        console.log(users.user);
        
        return (
            <div>
               
                
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
                                {users.length !=0 && users.isMail && 
                                    <div className="alert alert-danger">{users.isMail}</div>
                                    || users.isPass &&
                                    <div className="alert alert-danger">{users.isPass}</div>
                                }
                                     <LoginForm onSubmitLogin={()=>userLogin(formValue)} users={users} />
                                </p>
                                {users.isSuccess &&
                                    this.props.history.push('/manage')
                                   
                                }
                           
                            </div>
                        </div>
                        <br/>
                         <div className="row">
                             <div className="col">
                                <FooterHome />
                             </div>
                           
                         </div>
                   
                    </div>
                        
                    
                            
                
                
            </div>
        )
    }
}

function mapStateToProps(state){
        
    return {formValue:state.form.LoginForm ? state.form.LoginForm.values :null,users:state.users}
}

export default withRouter(connect(mapStateToProps,{userLogin})(Login));
