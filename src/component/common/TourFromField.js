import React from 'react'

export default (({type,label,input,required,meta:{error,touched}})=>{

    return(
        <div className="form-group">
            <label>{label}</label>
            <input type={type} {...input} required={required} className="form-control"/>
            {error && touched &&
            <div className="text-danger" role="alert">{error}</div>
            }
        </div>
    )
})