import {combineReducers} from 'redux'

import navReducer from './navReducer'
import trendsReduer from './trendsReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  trends: trendsReduer
})

export default rootReducer