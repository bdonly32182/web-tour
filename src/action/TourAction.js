import axios from 'axios'
import {LIST_TOUR, UPDATE_TOUR,DELETE_TOUR,CREATE_TOUR,TOUR_FETCH} from './Type'
const token = localStorage.getItem('token')
export const toursFetch =()=>{
    return dispatch =>{
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
        axios.get('http://localhost:3001/api/tour',config)
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
    const Data = new FormData()
   
    
    
    return dispatch =>{
            
            //Data คือการทำให้ form value and file upload เป็น  req.body and req.files
            
            Data.append('tourName',value.tourName)
            Data.append('place',value.place)
            Data.append('description',value.description)
            Data.append('duration',value.duration)
            Data.append('Hotel',value.Hotel)
            Data.append('Amountroom',value.Amountroom)
            Data.append('price',value.price)
            file.pdf.map(pdf=>{
                Data.append('file',pdf)
            })
            file.files.map(file=>{
                Data.append('file',file)
            })
            Array.isArray(value.Round)&&value.Round.map((e,i)=>{
                Data.append('round',`${value[`dateStart${i+1}`]} ${value[`dateEnd${i+1}`]}`)
                Data.append('guide',value.guide)
            })
            Array.isArray(value.highlight) && value.highlight.map((e,i)=>{
                Data.append('highlight',`${value[`highlight${i+1}`]}`)
            })
            
            const config = {
                headers: {
                  'Content-type': 'application/json',
                  'auth-token':token
                }
              };
              
        axios.post('http://localhost:3001/api/tour',Data,config)
            .then(res=>{
                    console.log(res.data);
                    dispatch({type:CREATE_TOUR,payload:res.data})
            })
    }
}
export const UpdateTour =(id,value,file,user)=>{
    const Data = new FormData()
    return dispatch=>{
        console.log(user);
        
        Data.append('tourName',value.tourName)
            Data.append('place',value.place)
            Data.append('description',value.description)
            Data.append('duration',value.duration)
            Data.append('highlight',value.highlight)
            Data.append('Hotel',value.Hotel)
            Data.append('firstname',user.firstname)
            file.pdf.map(pdf=>{
                Data.append('file',pdf)
            })
            file.files.map(file=>{
                Data.append('file',file)
            })
            Array.isArray(value.Round)&&value.Round.map((e,i)=>{
                Data.append('round',`${value[`dateStart${i+1}`]} ${value[`dateEnd${i+1}`]}`)
                Data.append('guide',value.guide)
            })
            Array.isArray(value.highlight) && value.highlight.map((e,i)=>{
                Data.append('highlights',`${value[`highlight${i+1}`]}`)
            })
        axios.put('http://localhost:3001/api/tour/'+id,Data)
        .then(res=>{
            console.log(res.data)
            dispatch ({type:UPDATE_TOUR,payload:res.data})
        })
    }
}
export const DelTour =(id,user)=>{
    
    
       return dispatch=>{
           
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
        axios.delete('http://localhost:3001/api/tour/'+id,config)
        .then(res=>{
            console.log(res.data);
            dispatch({type:DELETE_TOUR,payload:res.data})
        })
       }
}