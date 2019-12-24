import React, { Component } from 'react'
import {reduxForm,Field} from 'redux-form'
import {Link} from 'react-router-dom'
import {Registerfield} from './IntregateForm'
import RegisterFormField from '../../common/RegisterFormField'
 class RegisterForm extends Component {
     
     renderRegistForm(field){
        return field.map(({label,type,name,required})=>{
            return (
                <Field key={name} type={type} label={label} name={name} required={required} component={RegisterFormField}/>
            )
        })
     }
    render() {
        const {onSubmitRegister} = this.props
        return (
            <div>
                <form onSubmit= {this.props.handleSubmit(onSubmitRegister)}>
                    {this.renderRegistForm(Registerfield)}
                    <br/>
                 
                    <button className="btn btn-block btn-info">Register</button>
                    <br/>
                    <p className="text-right"><Link to="/login">Have a user Go to Login</Link></p>
                </form>
            </div>
        )
    }
}
function validate (value){
    console.log(value);
    
    const error={}
    Registerfield.forEach(({name,required})=>{
        if(!value[name] && required){
            error[name] = "Please Enter value in Text Input"
           
        }
       
    })
    return error
}
RegisterForm = reduxForm({validate,form:"registerForm"})(RegisterForm)
export default RegisterForm
