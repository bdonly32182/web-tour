import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CreateTour,tourFetch,UpdateTour} from '../../../action'
import TourForm from './Form/TourForm'

 class EditTour extends Component {
     componentDidMount(){
        if(this.props.match.params.id){
            this.props.tourFetch(this.props.match.params.id)
        }
     }
    render() {
        const {match,formValue,users,CreateTour,UpdateTour,tours} = this.props
        
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
                        {match.path.indexOf('add') >0&&
                          <div className="col-md-4">
                              
                             <p>ADD</p>
                             <p className="text-center">
                                  <TourForm onSubmit={()=>CreateTour(formValue,users)}/>
                            </p>
                          </div>
                        }
                         {match.path.indexOf('edit') >0&&
                          <div className="col-md-4">
                              
                             <p>Edit</p>
                             <p className="text-center">
                                  <TourForm onSubmit={()=>UpdateTour(tours._id,formValue)}/>
                            </p>
                          </div>
                        }
                    </div>
                    
                </div>
               
            </div>
        )
    }
}
function mapStateToprops(state){
    console.log('edit state',state.users);
    return {formValue:state.form.tourForm?state.form.tourForm.values:null,users:state.users,tours:state.tours}
    
}
export default connect(mapStateToprops,{CreateTour,tourFetch,UpdateTour})(EditTour)