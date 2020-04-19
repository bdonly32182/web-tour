import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {CreateTour,tourFetch,UpdateTour,loadUser,AssignGuideList,EditeAssignGuide} from '../../../action'
import TourForm from './Form/TourForm'
import Dropzone from 'react-dropzone'
import Header from '../Header'
import Menubar from '../Menubar'
const acceptType ="image/x-png, image/png , image/jpg , image/jpeg, image/gif"
// const data = new FormData()
 class EditTour extends Component {
    constructor(props){
        super(props)
        this.state={
            files:[],
            pdf:[]
        }
    }
    async componentDidMount(){
        if(this.props.match.params.id){
            this.props.tourFetch(this.props.match.params.id)
            //initial value guide ไม่มาเพราะ node ส่งแค่ไกด์ที่มีสถานะ ไม่ว่างมา
            this.props.EditeAssignGuide()
        }
        else{
           this.props.AssignGuideList()
        }

        await  this.props.loadUser()
                
            this.props.users&&this.props.users.role != "partner" &&this.props.history.push('/not_role')
        
            !this.props.token&&this.props.history.push('/')
     }
     onChangHandle =(event)=>{
        this.setState({
            selectFile:event.target.files
        })
    }
    onPreviewDrop = (files,rejectedfile) => {
       
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
         
        this.setState({
          files: this.state.files.concat(files)
        
        });
        rejectedfile.map(reject =>Object.assign(reject,{
            preview:URL.createObjectURL(reject)
        }))
        this.setState({
            pdf:this.state.pdf.concat(rejectedfile)
        })
  
      };
  onDelfile = async(delFile) =>{
     let removeFile = await this.state.files.filter(file => file != delFile)
     console.log(removeFile);
     this.setState({files : removeFile})
   }
   onDelPdf = async(delPdf) =>{
    let removePdf = await this.state.pdf.filter(file => file != delPdf)
    console.log(removePdf);
    this.setState({pdf : removePdf})
  }
    render () {
        const {match,formValue,users,CreateTour,UpdateTour,tours} = this.props
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
                      
                        {match.path.indexOf('add') >0&&
                          <div className="col-md-10">
                              <div className="col-md-3"></div>
                              <div className="col-md-5">
                                    {tours.Save &&
                                    <div className="alert alert-success" >
                                    <strong>Well done!</strong> You Create Tour successfully .
                                   </div>
                                    }

                                  {this.state.pdf.length >0 && this.state.files.length >0 ?
                                    <TourForm onSubmit={()=>CreateTour(formValue,users,upload)} guide={this.props.guide} file={this.state.files}/>  
                                    :
                                    <TourForm onSubmit={()=>CreateTour(formValue,users,upload)} guide={this.props.guide}/>  
                                  }
                                    
                            
                              </div>
                             
                            <div className="col-md-4">
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
                            {this.state.pdf.length >0 &&(
                                <Fragment>
                                    <h3>Preview  PDF</h3>
                                     {this.state.pdf.map(pdf=>(
                                         <div className="container" key={pdf.name}>
                                             <div className="row">
                                                 <div className="col-md-2">
                                                 <li key={pdf.name}>{pdf.name}</li>
                                                 </div>
                                                 <div >
                                                     <button className="btn btn-danger btn-sm title float-right" style={{display:'inline'}} onClick={()=>this.onDelPdf(pdf)}>X</button>
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
                          <div className="col-md-10">
                          <div className="col-md-3"></div>
                          <div className="col-md-5">
                                  {tours.editSuc &&
                                  <div className="alert alert-success" >
                                  <strong>Well done!</strong> You Edit Tour successfully .
                                 </div>
                                  }
                                    
                                        <TourForm onSubmit={()=>UpdateTour(tours._id,formValue,upload,users)}guide={this.props.guide} file="file"/>
                                     
                            </div>
                             
                            <div className="col-md-4">
                                
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
                            {this.state.pdf.length >0 &&(
                                <Fragment>
                                    <h3>Preview  PDF</h3>
                                     {this.state.pdf.map(pdf=>(
                                         <div className="container" key={pdf.name}>
                                             <div className="row">
                                                 <div className="col-md-2">
                                                 <li key={pdf.name}>{pdf.name}</li>
                                                 </div>
                                                 <div >
                                                     <button className="btn btn-danger btn-sm title float-right" style={{display:'inline'}} onClick={()=>this.onDelPdf(pdf)}>X</button>
                                                </div>
                                             </div>
                                         </div>
                                ))}
                                </Fragment>
                            )}
                        </div>
                          </div>
                          
                        }
                        {match.path.indexOf('check') >0&&
                          <div className="col-md-8">
                              <div className="col-md-4"></div>
                              <div className="col-md-8">
                                  <p>Check</p>
                                    
                                        <TourForm onSubmit={()=>UpdateTour(tours._id,formValue,upload)}guide={this.props.guide} disabled="disabled"/>
                                     
                             </div>

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
    return {formValue:state.form.tourForm?state.form.tourForm.values:null,
        users:state.users.user,
        tours:state.tours,
        token:state.users.token,
        guide:state.guide
    }
    
}
export default connect(mapStateToprops,{CreateTour,tourFetch,UpdateTour,loadUser,AssignGuideList,EditeAssignGuide})(EditTour)