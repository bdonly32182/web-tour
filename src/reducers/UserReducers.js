import {USER_LOGIN,USER_REGITER,USER_LOADED,USER_LOGOUT,USER_LOGIN_FAILE} from '../action/Type'
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };
export default function(state=initialState,action){
    switch(action.type){
        case USER_LOGIN:
            localStorage.setItem('token',action.payload.token)
            return action.payload
        case USER_REGITER:
            return action.payload
        case USER_LOADED :
            return {
                ...state,
                user:action.payload
            }
        case USER_LOGOUT:
        case USER_LOGIN_FAILE:
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        default:
            return state;
    }
}