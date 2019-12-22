import {LIST_TOUR,UPDATE_TOUR,DELETE_TOUR,CREATE_TOUR,TOUR_FETCH} from '../action/Type'
export default function(state=[],action){
    switch (action.type) {
        case LIST_TOUR:
            return action.payload;
        case TOUR_FETCH :
            return action.payload
        case UPDATE_TOUR:
            return action.payload;
        case  DELETE_TOUR:
            return action.payload;
        case CREATE_TOUR:
            return action.payload
        default:
            return state;
    }
}