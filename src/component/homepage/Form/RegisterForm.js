import React, { Component } from 'react'
import {reduxForm,Field} from 'redux-form'
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
        return (
            <div>
                <form>
                    {this.renderRegistForm(Registerfield)}
                    <br/>
                    <p className="text-primary"><input type="checkbox" ></input> I'm Agree</p>
                    <button className="btn btn-block btn-info">Register</button>
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
