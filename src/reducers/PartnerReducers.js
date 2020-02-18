import {LIST_PARTNER,CONFIRM_PARTNER,DELETE_PARTNER} from '../action/Type'

export default function(state=[],action){
    switch (action.type) {
        case LIST_PARTNER:
            return action.payload;
        case CONFIRM_PARTNER:
            return action.payload;
        case DELETE_PARTNER :
            return action.payload;
        default:
            return state;
    }
}