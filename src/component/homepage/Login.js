import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import HeaderHome from './contenthome/HeaderHome'
import LoginForm from './Form/LoginForm'
import {userLogin} from '../../action'
class Login extends Component {

    constructor(props){
        super(props);
    }
    
    
    render() {
        const {formValue,userLogin,users} = this.props
        
        return (
            <div>
                    <div className="container-fluid">
                        <div className="row">
                                <HeaderHome /> 
                        </div>
                     
                        <div className="row ">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                               
                                
                               
                                {users.length !=0 && users.isMail && 
                                    <div className="alert alert-danger">{users.isMail}</div>
                                    || users.isPass &&
                                    <div className="alert alert-danger">{users.isPass}</div>
                                }
                                     <LoginForm onSubmitLogin={()=>userLogin(formValue)} users={users} />
                                
                                {users.isSuccess &&
                                    this.props.history.push('/manage')
                                   
                                }
                           
                            </div>
                        </div>
                        <br/>
                       
                   
                    </div>
                        
                    
                            
                
                
            </div>
        )
    }
}

function mapStateToProps(state){
        
    return {formValue:state.form.LoginForm ? state.form.LoginForm.values :null,users:state.users}
}

export default withRouter(connect(mapStateToProps,{userLogin})(Login));
