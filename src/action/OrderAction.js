import axios from 'axios'
import {ORDERFETCH,APPROVEORDER} from '../action/Type'

export const orderFetch =()=>{
    return dispatch =>{
        axios.get('http://localhost:3001/api/listorder')
            .then(res=>{
                console.log(res.data);
                 dispatch({type:ORDERFETCH,payload:res.data})
            })
    }
}

export const approveOrder = (id)=>{
    return dispatch =>{
        axios.post('http://localhost:3001/api/approveorder/'+id)
            .then(res=>{
                console.log(res.data);
                dispatch({type:APPROVEORDER,payload:res.data})
            })
    }
}