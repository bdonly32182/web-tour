import axios from 'axios'
import {USER_LOGIN,USER_REGITER, USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,USER_LOGOUT,USER_LOGIN_FAILE} from './Type'
export const userLogin=(value)=>{
    
    
    return dispatch =>{
        axios.post('http://localhost:3001/login',value)
             .then(res=>{
                
                dispatch({type:USER_LOGIN,payload:res.data})
         }).catch(dispatch({type:USER_LOGIN_FAILE}))
         
    }
}

export const userRegister =(value) =>{
    return dispatch =>{
        axios.post('http://localhost:3001/register',value)
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
// ถ้าไม่ผู้เข้ากับ connect ต้องรับ dispatch and getState
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