import axios from 'axios'
import {LIST_PARTNER,CONFIRM_PARTNER,DELETE_PARTNER} from './Type'

export const partners =()=>{
    return dispatch =>{
        axios.get('http://localhost:3001/approve')
            .then(res=>{
                console.log('res.data',res.data);
                
                dispatch ({type:LIST_PARTNER,payload:res.data})
            })
    }
}

export const confirmPartner =(id,value)=>{
    return dispatch =>{
        axios.post('http://localhost:3001/approve/'+id,value)
            .then(res=>{
                console.log('confirm',res.data);
                dispatch({type:CONFIRM_PARTNER,payload:res.data})
            })
    }
}

export const delPartner =(id)=>{
    return dispatch =>{
        axios.delete('http://localhost:3001/approve/'+id)
            .then(res=>{
                dispatch ({type:DELETE_PARTNER,payload:res.data})
            })
    }
}