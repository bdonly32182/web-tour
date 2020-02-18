import React, { Component } from 'react'
import {connect} from 'react-redux'
import {guideFetch,CreateGuide,UpdateGuide,loadUser} from '../../../../action'
import GuideForm from '../Form/GuideForm'

 class EditGuide extends Component {
    async componentDidMount(){
         if(this.props.match.params.id){
             this.props.guideFetch(this.props.match.params.id)
         }
       await  this.props.loadUser()
         this.props.users&&this.props.users.role != "partner" &&this.props.history.push('/not_role')
        
        !this.props.token&&this.props.history.push('/')
     }
    render() {
        const {match,formValue,users,CreateGuide,UpdateGuide,guide} = this.props
        console.log('form guide',formValue);
        
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
                       
                              <GuideForm onSubmit={()=> CreateGuide(formValue,users)}/>
                        
                      </div>
                    }
                     {match.path.indexOf('edit') >0&&
                      <div className="col-md-4">
                          
                         <p>Edit</p>
                        
                              <GuideForm onSubmit={()=> UpdateGuide(guide._id,formValue)}/>
                       
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
    
    return {formValue:form.guideForm?form.guideForm.values:null,users:users.user,guide:guide,token:users.token}
}
export default connect(mapStateToProp,{guideFetch,CreateGuide,UpdateGuide,loadUser})(EditGuide)