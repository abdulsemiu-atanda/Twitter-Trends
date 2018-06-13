import {combineReducers} from 'redux'

import navReducer from './navReducer'
import trendsReduer from './trendsReducer'
import tweetsReducer from './tweetsReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  trends: trendsReduer,
  tweets: tweetsReducer
})

export default rootReducer