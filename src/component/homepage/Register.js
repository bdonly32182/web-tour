import React, { Component ,Fragment} from 'react'
import {connect} from 'react-redux'
import {userRegister} from '../../action'
import HeaderHome from './contenthome/HeaderHome'
import RegisterForm from './Form/RegisterForm'
import Dropzone from 'react-dropzone'

 class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            files:[],
            
        }
    }
    onPreviewDrop = (files) => {
       
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
         
        this.setState({
          files: this.state.files.concat(files)
        
        });
    
  
      };
    onDelfile = async(delFile) =>{
        let removeFile = await this.state.files.filter(file => file != delFile)
        console.log(removeFile);
        this.setState({files : removeFile})
      }
    render() {
        const {formValue,users,userRegister} = this.props
        const previewStyle ={
            display:"inline",
            width:100,
            hight:100
        }
        
        return (
            <div>
                <HeaderHome />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            
                                
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                          <div className="col-md-4">
                              {users.notMatch &&
                              <div className="alert alert-danger">
                                  Password is Match
                              </div> 
                              }
                              {users.isRegist &&
                                <div className="alert alert-danger">
                                    Please check Your Email or Your Lisence
                                </div>

                              }
                              {users.RegistSuccess &&
                              <div className="alert alert-success" >
                              <strong>Well done!</strong> You Register Success wait Approve from Admin .
                             </div>
                              }
                                {this.state.files&& this.state.files.length >0 &&
                                <RegisterForm onSubmitRegister = {()=>userRegister(formValue,this.state.files) } files={this.state.files}/>

                                }
                                {this.state.files&& this.state.files.length <=0 &&
                                <RegisterForm onSubmitRegister = {()=>userRegister(formValue,this.state.files) } />

                                }

                                 
                          </div>
                          <div className="col-md-3">
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
                                <h3>Previews Profile</h3>
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
                    
                </div>
               
                
            </div>
        )
    }
}

function mapStateToprops({form,users}){    
    return {formValue:form.registerForm ? form.registerForm.values:null,users:users}
}

export default connect(mapStateToprops,{userRegister})(Register)