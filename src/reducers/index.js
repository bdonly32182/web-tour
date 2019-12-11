import {combineReducers} from 'redux'
import {reducer as reduxForm} from 'redux-form'

const rootReducers = combineReducers({
    form:reduxForm
})
export default rootReducers