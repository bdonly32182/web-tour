import {GUIDEFETCH,GUIDESFETCH,CREATE_GUIDE,UPDATE_GUIDE,DELETE_GUIDE, ASSIGNMENT_GUIDE} from '../action/Type'

export default function(state=[],action){
    switch (action.type) {
        case GUIDESFETCH:
            return action.payload;
        case GUIDEFETCH:
            return action.payload;
        case CREATE_GUIDE:
            return action.payload;
        case UPDATE_GUIDE:
            return action.payload;
        case DELETE_GUIDE:
            return action.payload;
        case ASSIGNMENT_GUIDE:
            return action.payload
        default:
            return state;
    }
}