import {combineReducers} from 'redux'
import {reducer as reduxForm} from 'redux-form'
import UserReducers  from '../reducers/UserReducers'
const rootReducers = combineReducers({
    form:reduxForm,
    users:UserReducers
})
export default rootReducers