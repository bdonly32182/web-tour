import axios from 'axios'
import {LIST_TOUR, UPDATE_TOUR,DELETE_TOUR} from './Type'

export const toursFetch =()=>{
    return dispatch =>{
        axios.get('http://localhost:3001/api/tour')
            .then(res=>{
                console.log(res.data);
                dispatch({type:LIST_TOUR,payload:res.data})
            })
    }
}
export const UpdateTour =(id,value)=>{
    return dispatch=>{
        axios.put('http://localhost:3001/api/tour/'+id,value)
        .then(res=>{
            console.log(res.data)
            dispatch ({type:UPDATE_TOUR,payload:res.data})
        })
    }
}
export const DelTour =(id)=>{
       return dispatch=>{
        axios.delete('http://localhost:3001/api/tour/'+id)
        .then(res=>{
            console.log(res.data);
            dispatch({type:DELETE_TOUR,payload:res.data})
        })
       }
}