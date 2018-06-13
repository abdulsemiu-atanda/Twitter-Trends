import {TRENDS, TRENDS_REFRESH} from '../actionTypes/tweetConstants'
import {asyncActionNames} from '../util/asyncUtil'

const initialState = {loading: false, error: null, failure: false, trends: [], lastUpdated: null, refreshing: false, refreshingError: false}

const trendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(TRENDS).loading:
      return {...state, loading: action.data}
    case asyncActionNames(TRENDS).failure:
      return {...state, loading: false, error: action.data.error, failure: action.data.status}
    case asyncActionNames(TRENDS).success:
    case asyncActionNames(TRENDS_REFRESH).success:
      return {...state, trends: action.data[0].trends, lastUpdated: action.data[0].as_of}
    case asyncActionNames(TRENDS_REFRESH).loading:
      return {...state, refreshing: action.data}
    case asyncActionNames(TRENDS_REFRESH).failure:
      return {...state, loading: false, refreshingError: action.data.status}
    default:
      return state
  }
}

export default trendsReducer
