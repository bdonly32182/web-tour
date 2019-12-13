import React from 'react'

export default ({input,type,label,required,meta:{error,touched}})=>{
   
    return(
        <div className="form-group">
                <label>{label}</label>
                <input type={type} {...input} required={required} className="form-control"></input>
                {
                    touched&& error &&
                    (
                        <div className="text-danger  mt-2" role="alert">{error}</div>
                    )

                }
        </div>
    )
}