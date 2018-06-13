import {TWEETS} from '../actionTypes/tweetConstants'
import {asyncActionNames} from '../util/asyncUtil'

const initialState = {loading: false, error: null, failure: false, tweets: []}

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(TWEETS).loading:
      return {...state, loading: action.data}
    case asyncActionNames(TWEETS).failure:
      return {...state, loading: false, error: action.data.error, failure: action.data.status}
    case asyncActionNames(TWEETS).success:
      return {...state, tweets: action.data.statuses}
    default:
      return state
  }
}

export default tweetsReducer
