import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {guideFetch,CreateGuide,UpdateGuide,loadUser} from '../../../../action'
import GuideForm from '../Form/GuideForm'
import Dropzone from 'react-dropzone'
import Header from '../../Header'
import Menubar from '../../Menubar'
 class EditGuide extends Component {
     constructor(props){
         super(props)
         this.state={
            files:[]
         }
     }
    async componentDidMount(){
         if(this.props.match.params.id){
             this.props.guideFetch(this.props.match.params.id)
         }
       await  this.props.loadUser()
         this.props.users&&this.props.users.role != "partner" &&this.props.history.push('/not_role')
        
        !this.props.token&&this.props.history.push('/')
     }
     onPreviewDrop = (files,rejectedfile) => {
       
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
         
        this.setState({
          files: this.state.files.concat(files)
        
        });
        
  
      };
    render() {
        const {match,formValue,users,CreateGuide,UpdateGuide,guide} = this.props
        const previewStyle ={
            display:"inline",
            width:100,
            hight:100
        }
        let upload = {
             files:this.state.files,
             pdf:this.state.pdf
        }
        return (
            <div>
               <Header />
               <Menubar edite="edit"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        
                            
                    </div>
                    <br />
                    <br />
                    <br />
                    
                </div>
                <div className="row">
                    <div className="col-md-3">
                        
                    </div>
                    {match.path.indexOf('add') >0&&
                    <div className="col-md-8">
                      <div className="col-md-8">
                          
                         {guide.isSave &&
                         <div className="alert alert-success" >
                         <strong>Well done!</strong> You Create guide successfully .
                        </div>
                        }
                       {this.state.files&&this.state.files.length >0 ?
                        <GuideForm onSubmit={()=> CreateGuide(formValue,users,this.state.files)} files ={this.state.files}/>
                        :
                        <GuideForm onSubmit={()=> CreateGuide(formValue,users,this.state.files)}/>
                       }
               
                              
                        
                      </div>
                      <div>
                      <Dropzone onDrop={this.onPreviewDrop} accept="image/* pdf/*" >
                                {({getRootProps, getInputProps}) => (
                                    <div {...getRootProps()} >
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                )}
                            </Dropzone> 
                            {this.state.files.length > 0 && (
                            <Fragment>
                                <h3>Previews Image</h3>
                                {this.state.files.map(file => (
                                    <div className="container" key={file.name}>
                                        <div className="row">
                                            <div>
                                                <button className="btn btn-danger btn-sm title float-right" style={{display:'inline'}} onClick={()=>this.onDelfile(file)}>X</button>
                                            </div>
                                            <div className="col-md-1">
                                                         <img
                                                            alt="Preview"
                                                            key={file.preview}
                                                            src={file.preview}
                                                            style={previewStyle}
                                                        >
                                                        </img>
                                            </div>
                                        </div>                      
                                    </div>
                                ))}
                               
                               
                            </Fragment>
                            )}
                      </div>
                      </div>
                    }
                     {match.path.indexOf('edit') >0&&
                      <div className="col-md-4">
                          
                        {guide.msg &&
                        <div className="alert alert-success" >
                        <strong>Well done!</strong> You Edit Guide successfully .
                       </div>
                        }                        
                              <GuideForm onSubmit={()=> UpdateGuide(guide._id,formValue)} files="files"/>
                       
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
    console.log('gui',guide);
    
    return {formValue:form.guideForm?form.guideForm.values:null,users:users.user,guide:guide,token:users.token}
}
export default connect(mapStateToProp,{guideFetch,CreateGuide,UpdateGuide,loadUser})(EditGuide)