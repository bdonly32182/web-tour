import axios from 'axios'
import {LIST_TOUR, UPDATE_TOUR,DELETE_TOUR,CREATE_TOUR,TOUR_FETCH} from './Type'

export const toursFetch =()=>{
    return dispatch =>{
        axios.get('http://localhost:3001/api/tour')
            .then(res=>{
                console.log(res.data);
                dispatch({type:LIST_TOUR,payload:res.data})
            })
    }
}
export const tourFetch =(id)=>{
    return dispatch =>{
        axios.get('http://localhost:3001/api/tour/'+id)
            .then(res=>{
                console.log(res.data);
                dispatch({type:TOUR_FETCH,payload:res.data})                
            })
    }
}
export const CreateTour =(value,partner,file)=>{
    return dispatch =>{
        console.log(file);
        
            // const formData = new FormData()
            // for (const key of Object.keys(file)) {                
            //     formData.append('file',file[key])
            // }

            // console.log(formData);
            
            const data = {
                form:value,
                users:partner,
                formData:file
            }
            const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            }
        axios.post('http://localhost:3001/api/tour',data)
            .then(res=>{
                    console.log(res.data);
                    dispatch({type:CREATE_TOUR,payload:res.data})
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