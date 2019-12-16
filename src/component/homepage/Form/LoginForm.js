import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import LoginFormField from '../../common/LoginFormField'
import {Loginfield} from './IntregateForm'
 class LoginForm extends Component {

    constructor(props){
        super(props)
        this.renderForm = this.renderForm.bind(this)
    }
    renderForm (field){
        
        
       return field.map(({type,name,label,required})=>{
        return(
            <Field key={name} type={type} name={name} label={label} required={required} component={LoginFormField}/>

        )
       })
    }
    render() {
        const {onSubmitLogin,users} = this.props
        console.log(users);
        
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onSubmitLogin)}>
                    
                
                     {this.renderForm(Loginfield)}
                            <p className="text-left"><input type="checkbox"></input> remember me</p>
                            <p className="text-right"><Link to="/register">Forgot Your Password</Link></p>
                     <button className="btn btn-block btn-info">Sign In</button>
                     <br />
                     <p className="text-center"><Link to="/register">Register Here Click</Link></p>
                </form>
               
            </div>
        )
    }
}
function validate(value){
    //value is params's func validate for onChange value
    
    const error ={}
    Loginfield.forEach(({name,required})=>{
        if(!value[name] && required){
            error[name] ="Please input value"
        }
    })
    return error

}
LoginForm = reduxForm({validate,form:"LoginForm"})(LoginForm)
export default LoginForm;
