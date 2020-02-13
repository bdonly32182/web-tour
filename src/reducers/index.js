import {combineReducers} from 'redux'
import {reducer as reduxForm} from 'redux-form'
import UserReducers  from '../reducers/UserReducers'
import PartnerReducers from './PartnerReducers'
import TourReducers from './TourReducers'
import GuideReducers from './GuideReducers'
import OrderReducers from './OrderReducers'
const rootReducers = combineReducers({
    form:reduxForm,
    users:UserReducers,
    partners:PartnerReducers,
    tours:TourReducers,
    guide:GuideReducers,
    order:OrderReducers
})
export default rootReducers