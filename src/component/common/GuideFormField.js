import React from 'react'
export default (({type,label,input,required})=>{
return( 
    <div className="form-group">
            <label>{label}</label>
            <input type={type} {...input} required={required} className="form-control"/>

    </div>
    )
})