import {TWEETS, TWEETS_REFRESH} from '../actionTypes/tweetConstants'
import {asyncActionNames} from '../util/asyncUtil'

const initialState = {loading: false, error: null, failure: false, tweets: [], metadata: {}, refreshing: false, refreshError: false}

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(TWEETS).loading:
      return {...state, loading: action.data}
    case asyncActionNames(TWEETS).failure:
      return {...state, loading: false, error: action.data.error, failure: action.data.status}
    case asyncActionNames(TWEETS).success:
    case asyncActionNames(TWEETS_REFRESH).success:
      return {...state, tweets: action.data.statuses, metadata: action.data.search_metadata}
    case asyncActionNames(TWEETS_REFRESH).loading:
      return {...state, refreshing: action.data}
    case asyncActionNames(TWEETS_REFRESH).failure:
      return {...state, refreshing: false, refreshError: action.data.status}
    default:
      return state
  }
}

export default tweetsReducer
