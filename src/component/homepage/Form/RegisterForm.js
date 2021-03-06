import React, { Component ,Fragment} from 'react'
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
        const {onSubmitRegister,files} = this.props
       
        return (
            <div>
                <form onSubmit= {this.props.handleSubmit(onSubmitRegister)}>
                    {this.renderRegistForm(Registerfield)}
                   
                        <br/>
                    {files &&
                    <button className="btn btn-block btn-info">Register</button>
                    }
                    {!files &&
                    <button className="btn btn-block btn-info" disabled>Register</button>

                    }
                    <br/>
                    <Link to="/"><p className="text-right">Have a user Go to Login</p></Link>
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
