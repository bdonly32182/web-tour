import axios from 'axios'
import {GUIDESFETCH,GUIDEFETCH,CREATE_GUIDE,UPDATE_GUIDE,DELETE_GUIDE,ASSIGNMENT_GUIDE} from './Type'
const token = localStorage.getItem('token')
export const guidesFetch =()=>{
    return dispatch =>{
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
        axios.get('http://localhost:3001/api/guide',config)
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

export const CreateGuide =(form,user,files)=>{
    
    const Data =  new  FormData()
    return dispatch=>{
        // const data ={
        //     form:form,
        //     users:user
        // }
        Data.append('license',form.license)
        Data.append('Firstname',form.Firstname)
        Data.append('Lastname',form.Lastname)
        Data.append('Email',form.Email)
        Data.append('Password',form.Password)
        Data.append('Address',form.Address)
        Data.append('Tel',form.Tel)
        Data.append('Partner',user._id)
        files.map(file=>{
            Data.append('file',file)
        })
        
       
        axios.post('http://localhost:3001/api/guide',Data)
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
         const config = {
                    headers: {
                    'Content-type': 'application/json',
                    'auth-token':token
                    }
                };
        axios.delete('http://localhost:3001/api/guide/'+id)
            .then(res=>{
                   
                axios.get('http://localhost:3001/api/guide',config)
                .then(ress=>{
                    dispatch({type:DELETE_GUIDE,payload:ress.data})
                }).catch(e=>{
                    console.log('get catch');
                    
                })
                
            }).catch(e=>{
                console.log('del catch');
                
            })
    }
}

export const AssignGuideList = ()=>{
   
    
    
    return dispatch =>{
              
            const config = {
                headers: {
                  'Content-type': 'application/json',
                  'auth-token':token
                }
              };
        axios.get('http://localhost:3001/api/guideAssign',config)
            .then(res=>{
                dispatch({type:ASSIGNMENT_GUIDE,payload:res.data})
            })
    }
}
export const EditeAssignGuide =()=>{

    return dispatch =>{
              
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
    axios.get('http://localhost:3001/api/editAssign',config)
        .then(res=>{
            dispatch({type:ASSIGNMENT_GUIDE,payload:res.data})
        })
}

}