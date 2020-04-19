import React, { Component,Fragment } from 'react'
import {reduxForm,Field,FieldArray,formValueSelector, getFormMeta} from 'redux-form'
import {connect} from 'react-redux'
import {Tourfield} from '../../../homepage/Form/IntregateForm'
import  TourFromField from '../../../common/TourFromField'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
    deleteRound =(fields,index,round)=>{
        fields.remove(index)
        console.log(round);
        axios.put('http://localhost:3001/api/cancleAssign/'+round.guide).then(res=>{
            console.log(res.data);
            
        })
        
    }
    ConfirmDelete = (fields,index,round) => {
        confirmAlert({
          title: 'Confirm to Delete Round',
          message: `Are you sure delete Round ${round}`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.deleteRound(fields,index,round)
            },
            {
              label: 'No',
            //   onClick: () => alert('You Dont want Delete Guide ')
              
            }
          ]
        });
      };
     renderRound = ({ fields }) => (        
        <ul>
             {!this.props.disabled &&
            <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add Round </button>
             }
          {fields.map((member, index) =>
            // <li key={index}>;
            
              (<div key={index+1}>
                  <h4>รอบทัวร์ #{index + 1}
                  {!this.props.disabled && !this.props.initialValues ?
                  <button
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)} className="btn  btn-danger float-right">x
                </button>
                :
                <button
                 type="button"
                 title="Remove Member"
                 onClick={() => this.ConfirmDelete(fields,index,this.props.initialValues.Round[index])} className="btn  btn-danger float-right">x
                 </button>
                }
                {/* {this.props.initialValues &&
                 <button
                 type="button"
                 title="Remove Member"
                 onClick={() => this.deleteRound(fields,index)} className="btn  btn-danger float-right">x
                 </button>
                }               */}
                </h4>
                
                     
                    <div>
                           <label>Assignment Guide to Tour</label>
                           {!this.props.disabled &&
                        <Field name={`guide${index+1}`} component="select">
                        <option key={index}>--Select--</option>
                        {Array.isArray(this.props.guide.guide)&&this.props.guide.guide.map((guide,index)=>(
                                                <option key={index} value={guide._id} >{`${guide.Firstname} ${guide.Lastname}`}</option>
                        ))}
                         </Field> }
                        {this.props.disabled &&
                        <Field name={`guide${index+1}`} component="select" disabled>
                        <option key={index}>--Select--</option>
                        {Array.isArray(this.props.guide.guide)&&this.props.guide.guide.map((guide,index)=>(
                                                <option key={index} value={guide._id} >{`${guide.Firstname} ${guide.Lastname}`}</option>
                        ))}
                         </Field> }
                    </div>
                    <div className="row">
                            <div className="col-md-3">
                                <Field  
                                        name={`totalroom${index+1}`}
                                        label="จำนวนห้องพัก"
                                        type="text"
                                        required={true}
                                        component={TourFromField} 
                                        
                                />
                                <Field  
                                        name={`priceRound${index+1}`}
                                        label="ราคาห้องพัก"
                                        type="text"
                                        required={true}
                                        component={TourFromField} 
                                        
                                />
                                {/* <div> */}
                                <Field  
                                        name={`priceTour${index+1}`}
                                        label="ราคาทัวร์"
                                        type="text"
                                        required={true}
                                        component={TourFromField} 
                                        
                                />
                                {/* </div> */}
                        </div>      
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
          </ul>
      )
      renderHighlight = ({ fields }) => (
        <ul>
            {!this.props.disabled &&
            <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add HighLight</button>
            }
            
          
          {fields.map((member, index) =>
            // <li key={index}>
              (<div key={index+1}>
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
                    required={true}
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
      renderHotel =({fields})=>(
        <ul>
        {!this.props.disabled &&
        <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add Hotel</button>
        }
        
      
      {fields.map((hotel, index) =>
        // <li key={index}>
          (<div key={index+1}>
              <h4>Hotel #{index + 1}
              {!this.props.disabled &&
              <button
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)} className="btn  btn-danger float-right">x</button>}
            </h4>
            {!this.props.disabled &&
            <div> 
            <Field
                name={`hotel${index+1}`}
                type="text"
                component={TourFromField}
                label="โรงแรม"
                required={true}
                />   
            </div>
            }
            {this.props.disabled &&
            <div> 
            <Field
                name={`hotel${index+1}`}
                type="text"
                component={TourFromField}
                label="โรงแรม"
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
        const {onSubmit,guide,disabled,initialValues,file}  = this.props
        const previewStyle ={
            display:"inline",
            width:50,
            hight:150
        }
        {initialValues &&
           console.log(initialValues.Round[0]); 
        }
        
        
        return (
            <div >
                <form onSubmit={this.props.handleSubmit(onSubmit)}>
                    {/* {this.renderTourForm(Tourfield)} */}
                    <div className="row">
                        <div className="col-md-6">
                            <label>Tour Name</label>
                            <Field type="text"name='tourName' required={true} component={TourFromField}/>
                        </div>
                        <div className="col-md-6">
                            <label>Place</label>
                            <Field type="text" name='place' required={true} component={TourFromField}/>
                        </div>
                    </div>
                    <div className="row">
                        <label>Description Tour</label>
                        <Field type="text" name= 'description' required={true} component={TourFromField}/>
                    </div> 
                    <FieldArray name="Hotel" component={this.renderHotel}/>
                     <FieldArray name="Round" component={this.renderRound}/>
                     <FieldArray name="highlight" component={this.renderHighlight}/>  
                    {!disabled&& file ?
                    <button className="btn btn-block btn-info">Create Tour</button>
                    :
                    <button className="btn btn-block btn-info" disabled>Create Tour</button>

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
   console.log(value);
   
    
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
       if (!value[`priceTour${i+1}`] ) {
           err[`priceTour${i+1}`] = 'required'
       }
       if (!value[`totalroom${i+1}`]) {
           err[`totalroom${i+1}`] = "required"
       }
       if (!value[`priceRound${i+1}`]) {
           err[`priceRound${i+1}`] = 'required'
       }
       if (!value[`guide${i+1}`]) {
            err[`guide${i+1}`] = "required"
       }

    })
    Array.isArray(value.highlight) &&value.highlight.map((round,i)=>{
        if(!value[`highlight${i+1}`]){
             err[`highlight${i+1}`] ="required Please Input"
        }
 
     })
     Array.isArray(value.Hotel) && value.Hotel.map((hotel,i)=>{
         if (!value[`hotel${i+1}`]) {
             err[`hotel${i+1}`] = "required"
         }
     })
    return err
}
function mapStateToProps({tours}){
    console.log('tours',tours);
    
    if(tours && tours._id){
        let initial ={
            tourName:tours.tourName,
            place : tours.place,
            description:tours.description,
            Hotel:tours.Hotel,
            Round:tours.Round,
            highlight:tours.highlight,
            PathPictur:tours.PathPictur
        }
       Array.isArray(tours.Round)&& tours.Round.map((time,i)=>{
        //    console.log('form guide',time);
           
            let spilt = time.duration.split(" ")
            
            initial[`dateStart${i+1}`] = spilt[0]
            initial[`dateEnd${i+1}`] = spilt[1]
            initial[`guide${i+1}`] = time.guide
            initial[`totalroom${i+1}`] =time.totalroom
            initial[`priceRound${i+1}`] = time.priceRoom
            initial[`priceTour${i+1}`] = time.priceTour
        })  
        Array.isArray(tours.highlight)&& tours.highlight.map((high,i)=>{
            console.log(high);
            
            initial[`highlight${i+1}`] = high
        })
        Array.isArray(tours.Hotel)&& tours.Hotel.map((hotel,i)=>{
            initial[`hotel${i+1}`] = hotel
        })
        return {initialValues:initial}
    }else{
        return {}
    }
}
TourForm = reduxForm({validate,form:"tourForm"})(TourForm)
export default connect(mapStateToProps)(TourForm);