import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CreateTour,tourFetch} from '../../../action'
import TourForm from './Form/TourForm'
import { CREATE_TOUR } from '../../../action/Type'

 class EditTour extends Component {
     componentDidMount(){
        if(this.props.match.params.id){
            this.props.tourFetch(this.props.match.params.id)
        }
     }
    render() {
        const {match,formValue,users,CreateTour} = this.props
        console.log('dit',match);
        
        return (
            <div>
               
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            
                                
                        </div>
                        <br />
                        <br />
                        <br />
                        
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                          <div className="col-md-4">
                             
                             <p className="text-center">
                                  <TourForm onSubmit={()=>CreateTour(formValue,users)}/>
                            </p>
                          </div>
                    </div>
                    
                </div>
               
            </div>
        )
    }
}
function mapStateToprops(state){
    console.log('edit state',state.users);
    return {formValue:state.form.tourForm?state.form.tourForm.values:null,users:state.users}
    
}
export default connect(mapStateToprops,{CreateTour,tourFetch})(EditTour)