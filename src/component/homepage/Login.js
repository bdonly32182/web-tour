import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import HeaderHome from './contenthome/HeaderHome'
import LoginForm from './Form/LoginForm'
import {userLogin,loadUser} from '../../action'
const Token = localStorage.getItem('token')
class Login extends Component {

    constructor(props){
        super(props);
        console.log('constuctor');
        
        // {this.props.users&&this.props.users.token && this.props.history.push('/manage')}
    }

    

    
    
    render() {
        const {formValue,userLogin,users} = this.props
        console.log('render');
        
        return (
            <div >
                    <div className="container-fluid">
                        <div className="row">
                                <HeaderHome /> 
                        </div>
                     
                        <div className="row ">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4 bg-secondary">
                               
                                
                               
                                {users.length !=0 && users.isMail && 
                                    <div className="alert alert-danger">{users.isMail}</div>
                                    || users.isPass &&
                                    <div className="alert alert-danger">{users.isPass}</div>
                                }
                               
                                 <LoginForm onSubmitLogin={()=>userLogin(formValue,this.props.history)} users={users} />
                                {/* {users &&users.user &&this.props.history.push('/manage')} */}
                                {users.user || users.token ? this.props.history.push('/manage'):null}
                                
                                
                           
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

export default withRouter(connect(mapStateToProps,{userLogin,loadUser})(Login));
