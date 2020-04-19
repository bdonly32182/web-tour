import axios from 'axios'
import {ORDERFETCH,APPROVEORDER,CHECKORDER} from '../action/Type'
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

export const approveOrder = (order,user)=>{
    
    return dispatch =>{
        console.log('userOrder',user);
        
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
        axios.post('http://localhost:3001/api/approveorder',order,config)
            .then(res=>{
                axios.get('http://localhost:3001/api/listorder',config)
                .then(res=>{
                    console.log(res.data);
                    dispatch({type:APPROVEORDER,payload:res.data})
                })
                
            })
    }
}
export const checkOrder = (id)=>{
  return dispatch=>{
    axios.get('http://localhost:3001/api/order/'+id)
        .then(res=>{
          console.log(res.data);
          
          dispatch({type:CHECKORDER,payload:res.data})
        })
  }
    
}
export const DeleteOrder =(id)=>{
  return dispatch=>{
    const config = {
      headers: {
        'Content-type': 'application/json',
        'auth-token':token
      }
    };
    axios.delete('http://localhost:3001/api/partnerDelete/'+id).then(res=>{
      axios.get('http://localhost:3001/api/listorder',config)
            .then(res=>{
                console.log(res.data);
                 dispatch({type:ORDERFETCH,payload:res.data})
            })
    })
  }
}