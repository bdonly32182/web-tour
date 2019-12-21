import {LIST_TOUR,UPDATE_TOUR,DELETE_TOUR} from '../action/Type'
export default function(state=[],action){
    switch (action.type) {
        case LIST_TOUR:
            return action.payload;
        case UPDATE_TOUR:
            return action.payload;
        case  DELETE_TOUR:
            return action.payload;
        default:
            return state;
    }
}