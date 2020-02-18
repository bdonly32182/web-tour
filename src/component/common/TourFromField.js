import React,{Fragment,useState,useEffect, useCallback}  from 'react'
import Dropzone from 'react-dropzone'

export default (({type,label,input,required,meta:{error,touched}})=>{
    
    const [Files, setFiles] = useState([])

    return(
        <div className="form-group">
            <label>{label}</label>
           {/* {input.name==="files" &&(
               <div>
                   <Dropzone
                name={input.name}
                accept="image/* pdf/*"
                onDrop={(files,rejectedfile) => 
                  {
          
                files.map(file => Object.assign(file, {
                  
                    preview: URL.createObjectURL(file)
                     
                  }))
                  
                  setFiles(Files.concat(files)) 
                  console.log(rejectedfile);
                  const upload ={
                    Files,rejectedfile
                  }
                  input.onChange(upload)
                  
                  
                  }
        
                }
              >
                 
                {({getRootProps, getInputProps}) => (
                                    <div {...getRootProps()} >
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                )}
              </Dropzone>
                   
               </div>
                
              
           )} */}
          
           
            <input type={type} {...input} required={required} className="form-control"/>
            {error && touched &&
            <div className="text-danger" role="alert">{error}</div>
            }
        </div>
    )
})