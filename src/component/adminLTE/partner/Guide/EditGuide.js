import React, { Component } from 'react'
import {connect} from 'react-redux'
import {guideFetch,CreateGuide,UpdateGuide} from '../../../../action'
import GuideForm from '../Form/GuideForm'

 class EditGuide extends Component {
     componentDidMount(){
         if(this.props.match.params.id){
             this.props.guideFetch(this.props.match.params.id)
         }
        
     }
    render() {
        const {match,formValue,users,CreateGuide,UpdateGuide,guide} = this.props
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
                              <GuideForm onSubmit={()=> CreateGuide(formValue,users)}/>
                        </p>
                      </div>
                    }
                     {match.path.indexOf('edit') >0&&
                      <div className="col-md-4">
                          
                         <p>Edit</p>
                         <p className="text-center">
                              <GuideForm onSubmit={()=> UpdateGuide(guide._id,formValue)}/>
                        </p>
                      </div>
                    }
                </div>
                
            </div>
           
        </div>
        )
    }
}
function mapStateToProp({form,users,guide}){
    console.log('edit user',users);
    console.log('guide',guide);
    
    return {formValue:form.guideForm?form.guideForm.values:null,users:users,guide:guide}
}
export default connect(mapStateToProp,{guideFetch,CreateGuide,UpdateGuide})(EditGuide)