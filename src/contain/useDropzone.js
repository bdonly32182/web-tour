import React, { Component,Fragment } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

export default class useDropzone extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          files: []
        };
      }
    onPreviewDrop = (files,rejectedfile) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
        this.setState({
          files: this.state.files.concat(files)
        });

        const data = new FormData()
        data.append('file',files[0])

        
      
        axios.post('http://localhost:3001/api/test',data)
        .then(res=>{
            console.log(res.data);
            
        })
       
        
      };
      sendImg = img =>{
          axios.post('http://localhost:3001/api/test',img)
            .then(res=>{
                console.log(res.data);
                
            })
      }
      
    render() {
        
        const previewStyle = {
            display: "inline",
            width: 100,
            height: 100
          };
        return (
            <div>
               <Dropzone onDrop={this.onPreviewDrop} accept="image/*" >
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            )}
        </Dropzone> 
        {this.state.files.length > 0 && (
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map(file => (
                <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
              
              
            ))}
          </Fragment>
        )}
            </div>
            
        )
    }
}
