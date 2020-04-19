import axios from 'axios'
import {createBrowserHistory} from 'history'
import {Redirect} from 'react-router-dom'

import {USER_LOGIN,USER_REGITER, USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,USER_LOGOUT,USER_LOGIN_FAILE} from './Type'
export const userLogin=(value,history)=>{
    // const history = createBrowserHistory()
    
    return dispatch =>{
        axios.post('http://localhost:3001/login',value)
             .then(res=>{
                
                dispatch({type:USER_LOGIN,payload:res.data})
                if (res.data.isSuccess) {
                  history.push('/manage')
                  // <Link to="/manage" />
                }
                
         }).catch(dispatch({type:USER_LOGIN_FAILE}))
         
    }
}

export const userRegister =(value,file) =>{
  const data = new FormData()
    return dispatch =>{
        data.append('lisence',value.lisence)
        data.append('companyname',value.companyname)
        data.append('firstname',value.firstname)
        data.append('lastname',value.lastname)
        data.append('email',value.email)
        data.append('password',value.password)
        data.append('confirmpass',value.confirmpass)
        data.append('address',value.address)
        data.append('contact',value.contact)
        file.map(file=>{
          data.append('file',file)
      })
        axios.post('http://localhost:3001/register',data)
            .then(res =>{
                
                dispatch({type:USER_REGITER,payload:res.data})
            })
    }
}
//เก็บไว้ดู เป็นอีกท่านึงที่ควรรู้
export const userLogout =(dispatch)=>{
    dispatch({type:USER_LOGOUT})
   
}
export const Logout =()=>{
    return dispatch=>{
        dispatch({type:USER_LOGOUT})
    }
}
// Check token & load user
// ถ้าไม่ผูกเข้ากับ connect ต้องรับ dispatch and getState
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });
    console.log('loadUser working');
    
    //getState is func of store.dispatch
    axios
      .get('http://localhost:3001/api/auth/user', tokenConfig(getState))
      .then(res =>{
          console.log(res.data);
          
          dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      }
      ).catch((err)=> {          
        dispatch({type:USER_LOGIN_FAILE})
    })
    
  };
// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().users.token;
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['auth-token'] = token;
    }
  
    return config;
  };