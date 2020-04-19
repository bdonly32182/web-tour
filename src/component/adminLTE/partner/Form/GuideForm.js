import React, { Component } from 'react'
import {reduxForm,Field} from 'redux-form'
import {connect} from 'react-redux'
import {Guidefield} from '../../../homepage/Form/IntregateForm'
import GuideFormField from '../../../common/GuideFormField'

 class GuideForm extends Component {

    renderForm(field){
        return field.map(({label,name,required,type})=>{
            return(
                <Field key={name} type={type} label={label} name={name} required={required} component={GuideFormField}/>
            )
        })
    }
    render() {
        const {onSubmit,files} =this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onSubmit)}>
                    {this.renderForm(Guidefield)}
                    {files?
                     <button className="btn btn-block btn-info" >Create Guide</button>
                    :
                    <button className="btn btn-block btn-info" disabled>Create Guide</button>
                    }
                   

                </form>
                
            </div>
        )
    }
}
function validate(value){
    const err ={}
    Guidefield.forEach(({name,required})=>{
        if(!value[name]&&required){
            err[name] = "Please Enter value in Text Input"
        }
    })
    return err
}
function mapStateToProps({guide}){
    if(guide && guide._id){
        return {initialValues:guide}
    }else{
        return {}
    }
}
GuideForm = reduxForm({validate,form:"guideForm"})(GuideForm)
export default connect(mapStateToProps)(GuideForm)