import axios from 'axios'
import {GUIDESFETCH,GUIDEFETCH,CREATE_GUIDE,UPDATE_GUIDE,DELETE_GUIDE,ASSIGNMENT_GUIDE} from './Type'

export const guidesFetch =()=>{
    return dispatch =>{
        axios.get('http://localhost:3001/api/guide')
            .then(res=>{
                console.log(res.data);
                dispatch({type:GUIDESFETCH,payload:res.data})
            })
    }
}

export const guideFetch =(id)=>{
    return dispatch=>{
        axios.get('http://localhost:3001/api/guide/'+id)
            .then(res=>{
                console.log(res.data);
                dispatch({type:GUIDEFETCH,payload:res.data})
                
            })
    }
}

export const CreateGuide =(form,user)=>{
    return dispatch=>{
        const data ={
            form:form,
            users:user
        }
        axios.post('http://localhost:3001/api/guide',data)
            .then(res=>{
                console.log(res.data);
                dispatch({type:CREATE_GUIDE,payload:res.data})
                
            })
    }
}

export const UpdateGuide =(id,value)=>{
    return dispatch=>{
        axios.put('http://localhost:3001/api/guide/'+id,value)
            .then(res=>{
                console.log(res.data);
                dispatch({type:UPDATE_GUIDE,payload:res.data})
            })
    }
}

export const DelGuide =(id)=>{
    return dispatch =>{
        axios.delete('http://localhost:3001/api/guide/'+id)
            .then(res=>{
                console.log(res.data);
                dispatch({type:DELETE_GUIDE,payload:res.data})
            })
    }
}

export const AssignGuide = (guide,tour)=>{
   
    
    
    return dispatch =>{
              
            const assign = {guidId: guide._id,assignTour:tour}
            console.log(assign);
            
        axios.post('http://localhost:3001/api/guide/assign',assign)
            .then(res=>{
                dispatch({type:ASSIGNMENT_GUIDE,payload:res.data})
            })
    }
}