import {USER_LOGIN,USER_REGITER} from '../action/Type'

export default function(state=[],action){
    switch(action.type){
        case USER_LOGIN:
            return action.payload
        case USER_REGITER:
            return action.payload
        default:
            return state;
    }
}