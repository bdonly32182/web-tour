import axios from 'axios'
import {USER_LOGIN,USER_REGITER} from './Type'

export const userLogin=(value)=>{
    
    
    return dispatch =>{
        axios.post('http://localhost:3001/login',value)
             .then(res=>{
                 console.log(res);
                dispatch({type:USER_LOGIN,payload:res.data})
         })
    }
}

export const userRegister =(value) =>{
    return dispatch =>{
        axios.post('http://localhost:3001/register',value)
            .then(res =>{
                console.log(res);
                dispatch({type:USER_REGITER,payload:res.data})
            })
    }
}