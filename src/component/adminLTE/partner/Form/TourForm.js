import React, { Component } from 'react'
import {reduxForm,Field} from 'redux-form'
import {connect} from 'react-redux'
import {Tourfield} from '../../../homepage/Form/IntregateForm'
import  TourFromField from '../../../common/TourFromField'
 class TourForm extends Component {
     renderTourForm =(field)=>{
            return field.map(({label,type,name,required})=>{
                return(
                    <Field label={label} type={type} name={name} required={required} component={TourFromField}/>
                )
            })
     }
    render() {
        const {onSubmit}  = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onSubmit)}>
                    {this.renderTourForm(Tourfield)}
                    <button className="btn btn-block btn-info">Create Tour</button>
                </form>
            </div>
        )
    }
}
function validate(value){
    let err = {}
    Tourfield.forEach(({name,required})=>{
        if(!value[name] && required){
                err[name] ="Please Enter value in Text Input"
        }
    })
    return err
}
function mapStateToProps({tours}){
    if(tours && tours._id){
        return {initialValues:tours}
    }else{
        return {}
    }
}
TourForm = reduxForm({validate,form:"tourForm"})(TourForm)
export default connect(mapStateToProps)(TourForm);