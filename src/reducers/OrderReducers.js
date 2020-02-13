import {ORDERFETCH,APPROVEORDER} from '../action/Type'

export default function (state=[],action){
    switch (action.type) {
        case ORDERFETCH:
            return action.payload;
        case APPROVEORDER:
            return action.payload
        default:
            return state;
    }
}