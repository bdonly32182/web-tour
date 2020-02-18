import React, { Component,Fragment } from 'react'
import {reduxForm,Field,FieldArray,formValueSelector, getFormMeta} from 'redux-form'
import {connect} from 'react-redux'
import {Tourfield} from '../../../homepage/Form/IntregateForm'
import  TourFromField from '../../../common/TourFromField'
// import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import DatePicker,{
    FieldDatePicker,
    formatDates,
    normalizeDates,} 
    from '../../../DatePicker'


import 'react-widgets/dist/css/react-widgets.css'
 class TourForm extends Component {
     constructor(props){
         super(props)
     
     }
     
     renderTourForm =(field)=>{
            return field.map(({label,type,name,required})=>{
                return(
                    <Field key={name} label={label} type={type} name={name} required={required} component={TourFromField}/>
                    
                )
                
            })
            
     }
    
     renderRound = ({ fields }) => (        
        <div  className="container">
             {!this.props.disabled &&
            <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add Round </button>
             }
          {fields.map((member, index) =>
            // <li key={index}>;
            
              (<div key={index}>
                  <h4>รอบทัวร์ #{index + 1}
                  {!this.props.disabled &&
                  <button
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)} className="btn  btn-danger float-right">x
                </button>
                }              
                </h4>
                
                     
                    <div>
                           <label>Assignment Guide to Tour</label>
                           {!this.props.disabled &&
                        <Field name="guide" component="select">
                        <option>--Select--</option>
                        {Array.isArray(this.props.guide.guide)&&this.props.guide.guide.map((guide,index)=>(
                                                <option key={index} value={guide._id} >{`${guide.Firstname} ${guide.Lastname}`}</option>
                        ))}
                         </Field> }
                        {this.props.disabled &&
                        <Field name="guide" component="select" disabled>
                        <option>--Select--</option>
                        {Array.isArray(this.props.guide.guide)&&this.props.guide.guide.map((guide,index)=>(
                                                <option key={index} value={guide._id} >{`${guide.Firstname} ${guide.Lastname}`}</option>
                        ))}
                         </Field> }
                    </div>
                               
                            
                    
                    <div className="row">
                        {!this.props.disabled &&
                        <div className="col-md-10">
                        
                              <Field
                        name={`dateStart${index+1}`}
                        component={DatePicker}
                        placeholder="Start Day"
                        parse={normalizeDates}
                        format={formatDates}
                            />
                            <Field
                                    name={`dateEnd${index+1}`}
                                    component={DatePicker}
                                    placeholder="End Day"
                                    parse={normalizeDates}
                                    format={formatDates}
                                    
                                /> 
                        
                        </div>
                     }
                      {this.props.disabled &&
                        <div className="col-md-10">
                        
                              <Field
                        name={`dateStart${index+1}`}
                        component={DatePicker}
                        placeholder="Start Day"
                        parse={normalizeDates}
                        format={formatDates}
                        disabled    />
                            <Field
                                    name={`dateEnd${index+1}`}
                                    component={DatePicker}
                                    placeholder="End Day"
                                    parse={normalizeDates}
                                    format={formatDates}
                                    disabled
                                /> 
                        
                        </div>
                     }
                         
                   
                   
                   {/* <FieldArray name="highlight" component={this.renderHighlight}/>   */}
                </div>
               
              </div>)
            /* </li> */
          )}
        </div>
      )
      renderHighlight = ({ fields }) => (
        <ul>
            {!this.props.disabled &&
            <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add HighLight</button>
            }
            
          
          {fields.map((member, index) =>
            // <li key={index}>
              (<div key={index}>
                  <h4>HighLight #{index + 1}
                  {!this.props.disabled &&
                  <button
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)} className="btn  btn-danger float-right">x</button>}
                </h4>
                {!this.props.disabled &&
                <div> 
                <Field
                    name={`highlight${index+1}`}
                    type="text"
                    component={TourFromField}
                    label="สถานที่"
                    />   
                </div>
                }
                {this.props.disabled &&
                <div> 
                <Field
                    name={`highlight${index+1}`}
                    type="text"
                    component={TourFromField}
                    label="สถานที่"
                    disabled
                    />   
                </div>
                }
              </div>)
            /* </li> */
          )}
        </ul>
      )
    render() {
        const {onSubmit,guide,disabled,initialValues}  = this.props
        const previewStyle ={
            display:"inline",
            width:50,
            hight:150
        }
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onSubmit)}>
                    {this.renderTourForm(Tourfield)}
                    
                     <FieldArray name="Round" component={this.renderRound}/>
                     <FieldArray name="highlight" component={this.renderHighlight}/>  
                    {!disabled&&
                    <button className="btn btn-block btn-info">Create Tour</button>
                    }
                    {disabled&&initialValues&&Array.isArray(initialValues.PathPictur)&&initialValues.PathPictur.map((pictur,i)=>
                    (
                         <div className="col-md-1">   
                         <p className="text-right">
                           <img
                                alt="Preview"
                                key={i}
                                src={`http://localhost:3001${pictur}`}
                            style={previewStyle}
                        ></img>   
                        </p>                          
                        
                        </div>
                    ))}
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
   Array.isArray(value.Round) &&value.Round.map((round,i)=>{
       if(!value[`dateStart${i+1}`]||!value[`dateEnd${i+1}`]){
            err[`dateStart${i+1}`] ="required Please Input"
            err[`dateEnd${i+1}`] ="required Please Input"
       }

    })
    Array.isArray(value.highlight) &&value.highlight.map((round,i)=>{
        if(!value[`highlight${i+1}`]){
             err[`highlight${i+1}`] ="required Please Input"
        }
 
     })
    return err
}
function mapStateToProps({tours}){
    if(tours && tours._id){
        let initial ={
            tourName:tours.tourName,
            place : tours.place,
            description:tours.description,
            Hotel:tours.Hotel,
            Amountroom:tours.Amountroom,
            price:tours.price,
            Round:tours.Round,
            highlight:tours.highlight,
            PathPictur:tours.PathPictur
        }
       Array.isArray(tours.Round)&& tours.Round.map((time,i)=>{
           
            let spilt = time.duration.split(" ")
            
            initial[`dateStart${i+1}`] = spilt[0]
            initial[`dateEnd${i+1}`] = spilt[1]
            initial.guide = time.guide
        })  
        Array.isArray(tours.highlight)&& tours.highlight.map((high,i)=>{
            initial[`highlight${i+1}`] = high
        })
        return {initialValues:initial}
    }else{
        return {}
    }
}
TourForm = reduxForm({validate,form:"tourForm"})(TourForm)
export default connect(mapStateToProps)(TourForm);