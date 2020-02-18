import axios from 'axios'
import {ORDERFETCH,APPROVEORDER} from '../action/Type'
const token = localStorage.getItem('token')
export const orderFetch =()=>{
    return dispatch =>{
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
        axios.get('http://localhost:3001/api/listorder',config)
            .then(res=>{
                console.log(res.data);
                 dispatch({type:ORDERFETCH,payload:res.data})
            })
    }
}

export const approveOrder = (id,user)=>{
    
    return dispatch =>{
        console.log('userOrder',user);
        
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
        axios.post('http://localhost:3001/api/approveorder/'+id,user,config)
            .then(res=>{
                console.log(res.data);
                dispatch({type:APPROVEORDER,payload:res.data})
            })
    }
}